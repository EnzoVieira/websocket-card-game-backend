import { Socket } from "socket.io"

import { BuyCardController } from "src/modules/card-game/useCases/BuyCard/BuyCardController"
import { CreateGameController } from "src/modules/card-game/useCases/CreateGame/CreateGameController"
import { SendCardEventController } from "src/modules/card-game/useCases/SendCardEvent/SendCardEventController"
import { TakeCardController } from "src/modules/card-game/useCases/TakeCard/TakeCardController"

const createGameController = new CreateGameController()
const sendCardEventController = new SendCardEventController()
const buyCardController = new BuyCardController()
const takeCardController = new TakeCardController()

interface ISendEventDTO {
  tableId: string
  cardId: string
}

class CardRoute {
  handle(socket: Socket) {
    socket.on("card:join-table", (tableId: string) =>
      createGameController.handle(socket, tableId)
    )

    socket.on("card:message", ({ tableId, cardId }: ISendEventDTO) =>
      sendCardEventController.handle(socket, tableId, cardId)
    )

    socket.on("card:buy-card", (tableId: string) => {
      buyCardController.handle(socket, tableId)
    })

    socket.on("card:take-card", (tableId: string) => {
      takeCardController.handle(socket, tableId)
    })
  }
}

export { CardRoute }
