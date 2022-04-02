import { container } from "tsyringe"
import { Socket } from "socket.io"

import { CreateCoupGameUseCase } from "./CreateCoupGameUseCase"

class CreateCoupGameController {
  handle(socket: Socket, tableId: string): void {
    const createCoupGameUseCase = container.resolve(CreateCoupGameUseCase)

    createCoupGameUseCase.execute(socket, tableId)
  }
}

export { CreateCoupGameController }
