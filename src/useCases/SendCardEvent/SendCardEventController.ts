import { container } from "tsyringe"
import { Socket } from "socket.io"

import { SendCardEventUseCase } from "./SendCardEventUseCase"

class SendCardEventController {
  handle(socket: Socket, tableId: string, cardId: string) {
    const sendCardEventUseCase = container.resolve(SendCardEventUseCase)

    sendCardEventUseCase.execute(socket, tableId, cardId)
  }
}

export { SendCardEventController }
