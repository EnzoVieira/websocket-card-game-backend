import { inject, injectable } from "tsyringe"
import { Socket } from "socket.io"

import { IGamesRepository } from "src/repositories/IGamesRepository"

@injectable()
class CreateGameUseCase {
  constructor(
    @inject("GamesRepository")
    private gamesRepository: IGamesRepository
  ) {}

  execute(socket: Socket, tableId: string) {
    console.log(`entrou na mesa ${tableId}`)

    socket.join(tableId)

    socket.to(tableId).emit("join-player", socket.id)

    const gameAlreadyExists = this.gamesRepository.findGameById(tableId)

    if (!gameAlreadyExists) {
      this.gamesRepository.create(tableId)
    } else {
      const cards = this.gamesRepository.getCards(gameAlreadyExists)

      socket.emit("receive-cards", cards)
    }
  }
}

export { CreateGameUseCase }
