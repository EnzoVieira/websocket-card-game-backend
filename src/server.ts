import express from "express"

const server = express()
const PORT = 3333

server.get("/", (req, res) => {
  return res.json({ hello: "Olá" })
})

server.listen(3333, () => console.log(`API rodando na porta ${PORT}`))
