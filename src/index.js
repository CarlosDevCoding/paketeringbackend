import express from "./config/express.js"
import mongoose from "./config/mongoose.js"

const main = () => {
    express()
    mongoose()
}

main()
