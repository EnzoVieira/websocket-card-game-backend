import { container } from "tsyringe"
import { Socket } from "socket.io"

import { CreateGameUseCase } from "./CreateGameUseCase"

class CreateGameController {
  handle(socket: Socket, tableId: string): void {
    const createGameUseCase = container.resolve(CreateGameUseCase)

    createGameUseCase.execute(socket, tableId)
  }
}

export { CreateGameController }
