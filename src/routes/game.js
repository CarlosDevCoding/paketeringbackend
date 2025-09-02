import { Router } from "express"

const game = new Router()

game.get("/invite", (req, res) => {
    res.send("yaya")
})

game.get("/lobby/:id", (req, res) => {
    const id = req.params.id
    res.send(id)
})

export default game
