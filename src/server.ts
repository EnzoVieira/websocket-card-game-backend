import "reflect-metadata"
import express from "express"
import http from "http"
import socketio, { Socket } from "socket.io"

import "./shared/container"

import { CreateGameController } from "./useCases/CreateGame/CreateGameController"
import { SendCardEventController } from "./useCases/SendCardEvent/SendCardEventController"
import { BuyCardController } from "./useCases/BuyCard/BuyCardController"
import { TakeCardController } from "./useCases/TakeCard/TakeCardController"

const app = express()
const server = http.createServer(app)
const io = socketio(server, {
  cors: {
    origin: "*",
  },
})

const PORT = process.env.PORT || 3333

const createGameController = new CreateGameController()
const sendCardEventController = new SendCardEventController()
const buyCardController = new BuyCardController()
const takeCardController = new TakeCardController()

interface ISendEventDTO {
  tableId: string
  cardId: string
}

io.on("connection", (socket: Socket) => {
  socket.on("join-table", (tableId: string) =>
    createGameController.handle(socket, tableId)
  )

  socket.on("message", ({ tableId, cardId }: ISendEventDTO) =>
    sendCardEventController.handle(socket, tableId, cardId)
  )

  socket.on("buy-card", (tableId: string) => {
    buyCardController.handle(socket, tableId)
  })

  socket.on("take-card", (tableId: string) => {
    takeCardController.handle(socket, tableId)
  })
})

server.listen(3333, () => console.log(`API rodando na porta ${PORT}`))
