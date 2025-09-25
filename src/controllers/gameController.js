import Game from "../models/Game.js"

function checkWin(field, moveIndex, player) {
    const size = 15

    const row = Math.floor(moveIndex / size)
    const col = moveIndex % size

    const directions = [
        [0, 1], // horizontal
        [1, 0], // vertical
        [1, 1], // diagonal down-right
        [-1, 1] // diagonal up-right
    ]

    for (const [dr, dc] of directions) {
        let count = 1

        // check forward
        let r = row + dr,
            c = col + dc
        while (r >= 0 && r < size && c >= 0 && c < size && field[r * size + c] === player) {
            count++
            r += dr
            c += dc
        }

        // check backward
        r = row - dr
        c = col - dc
        while (r >= 0 && r < size && c >= 0 && c < size && field[r * size + c] === player) {
            count++
            r -= dr
            c -= dc
        }

        if (count >= 5) {
            return true
        }
    }

    return false
}

const gameController = {
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
        const game = await Game.findOne({ _id: gameId })

        if (!game) {
            throw "Game not found."
        }

        if (game.winner) {
            return game
        }

        const playerMoves = game.field.filter((tile) => tile === player)
        const otherPlayerMoves = game.field.filter((tile) => tile !== player && tile !== null)

        //check if user is not doubling moves
        if (playerMoves.length > otherPlayerMoves.length) {
            throw "It's not your turn yet."
        }

        //check if tile is not placing on an occupied tile
        if (game.field[moveIndex] !== null) {
            throw "It's not your turn yet."
        }

        game.field[moveIndex] = player

        if (checkWin(game.field, moveIndex, player)) {
            game.winner = player
        }

        await game.save()

        return game
    }
}

export default gameController
