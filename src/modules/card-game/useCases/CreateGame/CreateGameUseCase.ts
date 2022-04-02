import { inject, injectable } from "tsyringe"
import { Socket } from "socket.io"

import { IGamesRepository } from "src/modules/card-game/repositories/IGamesRepository"

@injectable()
class CreateGameUseCase {
  constructor(
    @inject("GamesRepository")
    private gamesRepository: IGamesRepository
  ) {}

  execute(socket: Socket, tableId: string) {
    console.log(`entrou na mesa ${tableId}`)

    socket.join(tableId)

    socket.to(tableId).emit("card:join-player", socket.id)

    const gameAlreadyExists = this.gamesRepository.findGameById(tableId)

    if (!gameAlreadyExists) {
      this.gamesRepository.create(tableId)
    } else {
      const cards = this.gamesRepository.getCards(gameAlreadyExists)

      socket.emit("card:receive-cards", cards)
    }
  }
}

export { CreateGameUseCase }
