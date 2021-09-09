import "reflect-metadata"
import express from "express"
import http from "http"
import { Server, Socket } from "socket.io"

import "./shared/container"

import { SocketRoutes } from "./shared/infra/socket/routes"

const app = express()

const server = http.createServer(app)

const io = new Server(server, {
  cors: {
    origin: "*",
  },
})

const PORT = process.env.PORT || 3333

const socketRoutes = new SocketRoutes()

io.on("connection", (socket: Socket) => {
  socketRoutes.connection(socket)
})

server.listen(3333, () => console.log(`API rodando na porta ${PORT}`))
