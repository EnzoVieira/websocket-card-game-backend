interface ICard {
  id: string
  card: string
  suit: string
}

interface IGame {
  id: string
  deck: ICard[]
  lastCard?: ICard
}

interface ICoupGamesRepository {
  create(tableId: string): void
  findById(tableId: string): IGame | undefined
  getCards(game: IGame): ICard[]
  shuffleCards(): ICard[]
}

export { ICoupGamesRepository, IGame, ICard }
