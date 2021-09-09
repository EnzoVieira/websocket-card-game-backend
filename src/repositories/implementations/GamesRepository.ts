import { ICard, IGame, IGamesRepository } from "../IGamesRepository"

class GamesRepository implements IGamesRepository {
  private games: IGame[] = []

  private deck: ICard[] = [
    { id: "c1", card: "A", type: "Copas" },
    { id: "c2", card: "2", type: "Copas" },
    { id: "c3", card: "3", type: "Copas" },
    { id: "c4", card: "4", type: "Copas" },
    { id: "c5", card: "5", type: "Copas" },
    { id: "c6", card: "6", type: "Copas" },
    { id: "c7", card: "7", type: "Copas" },
    { id: "c8", card: "8", type: "Copas" },
    { id: "c9", card: "9", type: "Copas" },
    { id: "c10", card: "10", type: "Copas" },
    { id: "c11", card: "J", type: "Copas" },
    { id: "c12", card: "Q", type: "Copas" },
    { id: "c13", card: "K", type: "Copas" },

    { id: "o1", card: "A", type: "Ouro" },
    { id: "o2", card: "2", type: "Ouro" },
    { id: "o3", card: "3", type: "Ouro" },
    { id: "o4", card: "4", type: "Ouro" },
    { id: "o5", card: "5", type: "Ouro" },
    { id: "o6", card: "6", type: "Ouro" },
    { id: "o7", card: "7", type: "Ouro" },
    { id: "o8", card: "8", type: "Ouro" },
    { id: "o9", card: "9", type: "Ouro" },
    { id: "o10", card: "10", type: "Ouro" },
    { id: "o11", card: "J", type: "Ouro" },
    { id: "o12", card: "Q", type: "Ouro" },
    { id: "o13", card: "K", type: "Ouro" },

    { id: "p1", card: "A", type: "Paus" },
    { id: "p2", card: "2", type: "Paus" },
    { id: "p3", card: "3", type: "Paus" },
    { id: "p4", card: "4", type: "Paus" },
    { id: "p5", card: "5", type: "Paus" },
    { id: "p6", card: "6", type: "Paus" },
    { id: "p7", card: "7", type: "Paus" },
    { id: "p8", card: "8", type: "Paus" },
    { id: "p9", card: "9", type: "Paus" },
    { id: "p10", card: "10", type: "Paus" },
    { id: "p11", card: "J", type: "Paus" },
    { id: "p12", card: "Q", type: "Paus" },
    { id: "p13", card: "K", type: "Paus" },

    { id: "e1", card: "A", type: "Espada" },
    { id: "e2", card: "2", type: "Espada" },
    { id: "e3", card: "3", type: "Espada" },
    { id: "e4", card: "4", type: "Espada" },
    { id: "e5", card: "5", type: "Espada" },
    { id: "e6", card: "6", type: "Espada" },
    { id: "e7", card: "7", type: "Espada" },
    { id: "e8", card: "8", type: "Espada" },
    { id: "e9", card: "9", type: "Espada" },
    { id: "e10", card: "10", type: "Espada" },
    { id: "e11", card: "J", type: "Espada" },
    { id: "e12", card: "Q", type: "Espada" },
    { id: "e13", card: "K", type: "Espada" },
  ]

  constructor() {}

  create(tableId: string): void {
    const shuffleDeck = this.shuffleCards()

    this.games.push({ id: tableId, deck: [...shuffleDeck] })

    console.log("Criou um novo jogo")
  }

  findGameById(tableId: string): IGame | undefined {
    const game = this.games.find(game => game.id === tableId)

    return game
  }

  shuffleCards(): ICard[] {
    const cards: ICard[] = []

    while (cards.length < 52) {
      const randomindex = Math.floor(Math.random() * this.deck.length)

      const randomCard = this.deck[randomindex]

      const cardAlreadyIncluded = cards.find(card => randomCard.id === card.id)

      if (cardAlreadyIncluded) continue

      cards.push(randomCard)
    }

    return cards
  }

  getCards(game: IGame): ICard[] {
    const cards = game.deck.splice(0, 9)

    return cards
  }

  getCardById(cardId: string): ICard | undefined {
    const card = this.deck.find(card => card.id === cardId)

    return card
  }

  buyCard(game: IGame): ICard | undefined {
    const card = game.deck.pop()

    return card
  }

  takeLastCard(game: IGame): ICard | undefined {
    return game.lastCard
  }

  postLastCard(game: IGame, card: ICard) {
    game.lastCard = card
    console.log(game)
  }
}

export { GamesRepository }
