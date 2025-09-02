import Game from "../models/Game"

const gameService = {
    getGame: async (url) => {
        const game = await Game.find({ url: url })

        if (!game) {
            throw new Error("No game found.")
        }

        return game
    },
    createInvite: async () => {
        const newGameId = crypto.randomUUID()

        const newGame = Game.create({
            url: newGameId,
            moves: []
        })

        await newGame.save()

        return newGameId
    }
}
