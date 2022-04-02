import { container } from "tsyringe"
import { Socket } from "socket.io"

import { TakeCardUseCase } from "./TakeCardUseCase"

class TakeCardController {
  handle(socket: Socket, tableId: string) {
    const takeCardUseCase = container.resolve(TakeCardUseCase)

    takeCardUseCase.execute(socket, tableId)
  }
}

export { TakeCardController }
