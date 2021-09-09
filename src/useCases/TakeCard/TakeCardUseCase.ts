import { inject, injectable } from "tsyringe"
import { Socket } from "socket.io"
import { IGamesRepository } from "src/repositories/IGamesRepository"

@injectable()
class TakeCardUseCase {
  constructor(
    @inject("GamesRepository")
    private gamesRepository: IGamesRepository
  ) {}

  execute(socket: Socket, tableId: string) {
    const game = this.gamesRepository.findGameById(tableId)

    if (!game) {
      throw new Error("Jogo não existe")
    }

    const lastCard = this.gamesRepository.takeLastCard(game)

    socket.to(tableId).emit("card:remove-last-card")

    socket.emit("card:take-last-card", lastCard)
  }
}

export { TakeCardUseCase }
