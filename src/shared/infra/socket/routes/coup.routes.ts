import { Socket } from "socket.io"

import { CreateCoupGameController } from "src/modules/coup-game/useCases/CreateCoupGame/CreateCoupGameController"

const createCoupGameController = new CreateCoupGameController()

class CoupRoutes {
  handle(socket: Socket) {
    socket.on("coup:join", (tableId: string) => {
      createCoupGameController.handle(socket, tableId)
    })
  }
}

export { CoupRoutes }
