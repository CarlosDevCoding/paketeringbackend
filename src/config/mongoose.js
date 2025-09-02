import m from "mongoose"

const mongoose = async () => {
    try {
        m.connect("mongodb://127.0.0.1:27017/gomoku")
        console.log("DB running @ mongodb://127.0.0.1:27017/gomoku")
    } catch (e) {
        console.log(e)
    }
}

export default mongoose
