import Game from "../models/Game.js"

const gameService = {
    getGame: async (id) => {
        const game = await Game.findOne({ _id: id })

        if (!game) {
            throw new Error("No game found.")
        }

        return game
    },
    createGame: async () => {
        const newGameId = crypto.randomUUID()

        const GAMESIZE = 15 * 15

        const newField = Array(GAMESIZE).fill(null)

        const newGame = await Game.create({
            _id: newGameId,
            field: newField
        })

        return newGame
    },
    createMove: async (gameId, player, moveIndex) => {
        const game = await Game.find({ _id: gameId })

        if (!game) {
            throw "Game not found."
        }

        const playerMoves = game.field.find((tile) => tile === player)
        const otherPlayerMoves = game.field.find((tile) => tile !== player && tile !== null)

        //check if user is not doubling moves
        if (playerMoves > otherPlayerMoves) {
            throw "It's not your turn yet."
        }

        //check if tile is not placing on an occupied tile
        if (game.field[moveIndex] !== null) {
            throw "It's not your turn yet."
        }

        game.field[moveIndex] = player

        await game.save()

        return game
    }
}

export default gameService
