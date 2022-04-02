import { Socket } from "socket.io"

import { CardRoute } from "./card.routes"
import { CoupRoutes } from "./coup.routes"

const cardRoute = new CardRoute()
const coupRoutes = new CoupRoutes()

class SocketRoutes {
  connection(socket: Socket) {
    cardRoute.handle(socket)
    coupRoutes.handle(socket)
  }
}

export { SocketRoutes }
