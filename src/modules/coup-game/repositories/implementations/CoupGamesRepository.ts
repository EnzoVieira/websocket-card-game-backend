import { ICard, ICoupGamesRepository, IGame } from "../ICoupGamesRepository"

class CoupGamesRepository implements ICoupGamesRepository {
  private games: IGame[] = []

  private deck: ICard[] = [
    { id: "c1", card: "A", suit: "Copas" },
    { id: "c2", card: "2", suit: "Copas" },
    { id: "c5", card: "5", suit: "Copas" },
    { id: "c7", card: "7", suit: "Copas" },
    { id: "c9", card: "9", suit: "Copas" },
    { id: "c10", card: "10", suit: "Copas" },
    { id: "c11", card: "J", suit: "Copas" },
    { id: "c12", card: "Q", suit: "Copas" },
    { id: "c13", card: "K", suit: "Copas" },

    { id: "o1", card: "A", suit: "Ouro" },
    { id: "o5", card: "5", suit: "Ouro" },
    { id: "o7", card: "7", suit: "Ouro" },
    { id: "o9", card: "9", suit: "Ouro" },
    { id: "o10", card: "10", suit: "Ouro" },
    { id: "o11", card: "J", suit: "Ouro" },
    { id: "o12", card: "Q", suit: "Ouro" },
    { id: "o13", card: "K", suit: "Ouro" },

    { id: "p1", card: "A", suit: "Paus" },
    { id: "p5", card: "5", suit: "Paus" },
    { id: "p9", card: "9", suit: "Paus" },
    { id: "p10", card: "10", suit: "Paus" },
    { id: "p11", card: "J", suit: "Paus" },
    { id: "p12", card: "Q", suit: "Paus" },
    { id: "p13", card: "K", suit: "Paus" },

    { id: "e1", card: "A", suit: "Espada" },
    { id: "e5", card: "5", suit: "Espada" },
    { id: "e9", card: "9", suit: "Espada" },
    { id: "e10", card: "10", suit: "Espada" },
    { id: "e11", card: "J", suit: "Espada" },
    { id: "e12", card: "Q", suit: "Espada" },
    { id: "e13", card: "K", suit: "Espada" },

    { id: "joker", card: "Coringa", suit: "Coringa" },
  ]

  create(tableId: string): void {
    const shuffleDeck = this.shuffleCards()

    this.games.push({ id: tableId, deck: [...shuffleDeck] })

    console.log("Criou um novo jogo")
  }

  findById(tableId: string): IGame | undefined {
    const game = this.games.find(game => game.id === tableId)

    return game
  }

  getCards(game: IGame): ICard[] {
    const cards = game.deck.splice(0, 9)

    return cards
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
}

export { CoupGamesRepository }
