import mongoose from "mongoose"

const gameSchema = new mongoose.Schema(
    {
        _id: String,
        winner: { type: String, required: false },
        field: Array
    },
    { _id: false }
)

const Game = mongoose.model("Game", gameSchema)

export default Game
