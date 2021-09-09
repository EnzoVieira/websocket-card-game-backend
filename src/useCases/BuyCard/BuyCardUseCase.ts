import { inject, injectable } from "tsyringe"
import { Socket } from "socket.io"

import { IGamesRepository } from "src/repositories/IGamesRepository"

@injectable()
class BuyCardUseCase {
  constructor(
    @inject("GamesRepository")
    private gamesRepository: IGamesRepository
  ) {}

  execute(socket: Socket, tableId: string) {
    const game = this.gamesRepository.findGameById(tableId)

    if (!game) {
      throw new Error("Jogo não encontrado")
    }

    const card = this.gamesRepository.buyCard(game)

    if (!card) {
      throw new Error("Carta não existe")
    }

    this.gamesRepository.postLastCard(game, card)

    socket.emit("receive-card", card)
  }
}

export { BuyCardUseCase }
