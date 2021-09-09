import { inject, injectable } from "tsyringe"
import { Socket } from "socket.io"

import { IGamesRepository } from "src/repositories/IGamesRepository"

@injectable()
class SendCardEventUseCase {
  constructor(
    @inject("GamesRepository")
    private gamesRepository: IGamesRepository
  ) {}

  execute(socket: Socket, tableId: string, cardId: string) {
    console.log(`mandando uma CARTA para ${tableId}`)

    const gameAlreadyExists = this.gamesRepository.findGameById(tableId)

    if (!gameAlreadyExists) {
      throw new Error("Jogo não existe")
    }

    const card = this.gamesRepository.getCardById(cardId)

    if (!card) {
      throw new Error("Carta não existe")
    }

    this.gamesRepository.postLastCard(gameAlreadyExists, card)

    socket.to(tableId).emit("message", card)
  }
}

export { SendCardEventUseCase }
