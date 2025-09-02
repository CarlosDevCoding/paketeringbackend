import mongoose from "mongoose"
import game from "../routes/game"

const gameSchema = new mongoose.Schema({
    url: String,
    moves: Array
})

/*
    moves: [{player: "player2", moveIndex: 0}, {player: "player1", moveIndex: 2}]
*/

const Game = mongoose.model("Game", gameSchema)

export default Game
