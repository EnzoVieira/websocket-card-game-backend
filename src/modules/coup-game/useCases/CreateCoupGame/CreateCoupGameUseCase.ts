import { inject, injectable } from "tsyringe"
import { Socket } from "socket.io"
import { ICoupGamesRepository } from "../../repositories/ICoupGamesRepository"

@injectable()
class CreateCoupGameUseCase {
  constructor(
    @inject("CoupGamesRepository")
    private coupGamesRepository: ICoupGamesRepository
  ) {}

  execute(socket: Socket, tableId: string) {
    socket.join(tableId)

    socket.to(tableId).emit("coup:join", socket.id)

    const gameAlreadyExists = this.coupGamesRepository.findById(tableId)

    if (!gameAlreadyExists) {
      console.log(`Criou nova mesa de COUP ${tableId}`)
      this.coupGamesRepository.create(tableId)
    } else {
      console.log(`Mesa de COUP já existe ${tableId}`)
      const cards = this.coupGamesRepository.getCards(gameAlreadyExists)

      socket.emit("coup:receive-cards", cards)
    }
  }
}

export { CreateCoupGameUseCase }
