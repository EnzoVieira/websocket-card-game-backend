import { container } from "tsyringe"

import { IGamesRepository } from "src/modules/card-game/repositories/IGamesRepository"
import { GamesRepository } from "src/modules/card-game/repositories/implementations/GamesRepository"

import { ICoupGamesRepository } from "src/modules/coup-game/repositories/ICoupGamesRepository"
import { CoupGamesRepository } from "src/modules/coup-game/repositories/implementations/CoupGamesRepository"

container.registerSingleton<IGamesRepository>(
  "GamesRepository",
  GamesRepository
)

container.registerSingleton<ICoupGamesRepository>(
  "CoupGamesRepository",
  CoupGamesRepository
)
