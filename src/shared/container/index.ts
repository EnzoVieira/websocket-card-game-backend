import { container } from "tsyringe"

import { IGamesRepository } from "src/repositories/IGamesRepository"
import { GamesRepository } from "src/repositories/implementations/GamesRepository"

container.registerSingleton<IGamesRepository>(
  "GamesRepository",
  GamesRepository
)
