import { Socket } from "socket.io"

import { CardRoute } from "./card.routes"

const cardRoute = new CardRoute()

class SocketRoutes {
  connection(socket: Socket) {
    cardRoute.handle(socket)
  }
}

export { SocketRoutes }
