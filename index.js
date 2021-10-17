const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
const mongoose = require('mongoose')
const PORT = 5000
const { MONGOURI } = require('./keys')



//Database Connection
const db = mongoose.connect(MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false
})

const db2 = db.useDb("__CONCOX__")


// const devices = new mongoose.Schema({});
const User = new Schema({ url: { MONGOURI }, text: String, id: Number },
    { collection: 'devices' });
console.log(User.findOne())




mongoose.connection.on('connected', () => {
    console.log("Connected to mongodb")
})
mongoose.connection.on('error', (err) => {
    console.log('Connection Error', err)
})

app.use(express.json())



app.listen(PORT, () => {
    console.log("Server Started at PORT ", PORT)
})