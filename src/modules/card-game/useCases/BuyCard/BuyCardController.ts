import { container } from "tsyringe"
import { Socket } from "socket.io"

import { BuyCardUseCase } from "./BuyCardUseCase"

class BuyCardController {
  handle(socket: Socket, tableId: string) {
    const buyCardUseCase = container.resolve(BuyCardUseCase)

    buyCardUseCase.execute(socket, tableId)
  }
}

export { BuyCardController }
