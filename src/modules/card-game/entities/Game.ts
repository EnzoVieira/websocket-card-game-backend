import { v4 as uuidv4 } from "uuid"

import { ICard } from "src/modules/card-game/repositories/IGamesRepository"

class Game {
  id?: string

  deck?: ICard[]

  constructor() {
    if (!this.id) {
      this.id = uuidv4()
    }
  }
}

export { Game }
