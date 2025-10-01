import m from "mongoose"

const mongoose = async () => {
    try {
        m.connect(
            "mongodb+srv://admin:test@cluster0.sesey3t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
        )
        console.log("DB running @ mongodb://127.0.0.1:27017/gomoku")
    } catch (e) {
        console.log(e)
    }
}

export default mongoose
