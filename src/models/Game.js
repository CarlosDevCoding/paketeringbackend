import mongoose from "mongoose"

const gameSchema = new mongoose.Schema(
    {
        _id: String,
        field: Array
    },
    { _id: false }
)

const Game = mongoose.model("Game", gameSchema)

export default Game
