import { Router } from "express"
import gameController from "../controllers/gameController.js"

const game = new Router()
/* test */
game.post("/create", async (req, res) => {
    try {
        const game = await gameController.createGame()
        res.send(game)
    } catch (e) {
        console.log(e)
        res.status(400).send()
    }
})

game.post("/move", async (req, res) => {
    try {
        const { gameId, player, moveIndex } = req.body
        const move = await gameController.createMove(gameId, player, moveIndex)
        res.send(move)
    } catch (e) {
        console.log(e)
        res.status(500).send()
    }
})

game.get("/:id", async (req, res) => {
    const id = req.params.id
    const game = await gameController.getGame(id)
    res.send(game)
})

export default game
