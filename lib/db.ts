import mongoose from "mongoose"

const db = async () => {
    try {
        mongoose.connect(process.env.MONGO_URL as string)
        console.log("mongo connected")

    } catch (error) {
        console.log("Unable to connect to DB", error)

    }
}
export default db