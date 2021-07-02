import express from 'express'
import mongoose from 'mongoose'
import Post from './Post.js'
import router from "./router.js";

const PORT = 3000;
const app = express()

app.use(express.json())
app.use('/api', router)

const DB_URI = "mongodb+srv://Iskander:2u3nMdpWXxhPzD1Z@cluster0.bby5x.mongodb.net/simple-rest-express?retryWrites=true&w=majority";

async function startServer() {
    try {
        await mongoose.connect(DB_URI, {useNewUrlParser: true, useFindAndModify: false})
        app.listen(PORT, () => {
            console.log('Server listening on port 3000')
        })

    } catch (error) {
        throw new Error(error)
    }
}

startServer().then(result => {
    console.log('Server connected to MongoDB')
})
