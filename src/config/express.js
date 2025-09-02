import e from "express"
import game from "../routes/game.js"

const express = () => {
    const app = e()
    const PORT = process.env.PORT || 3000

    app.get("/health", (req, res) => {
        res.status(200).json({ status: "ok" })
    })

    app.use("/game", game)

    app.listen(PORT, () => {
        console.log(`Backend running @ http://localhost:${PORT}`)
    })
}

export default express
