interface ICard {
  id: string
  card: string
  type: string
}

interface IGame {
  id: string
  deck: ICard[]
  lastCard?: ICard
}

interface IGamesRepository {
  create(tableId: string): void
  findGameById(tableId: string): IGame | undefined
  shuffleCards(): ICard[]
  getCards(game: IGame): ICard[]
  getCardById(cardId: string): ICard | undefined
  buyCard(game: IGame): ICard | undefined
  takeLastCard(game: IGame): ICard | undefined
  postLastCard(game: IGame, card: ICard): void
}

export { IGamesRepository, IGame, ICard }
