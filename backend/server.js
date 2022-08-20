const express = require('express')
const { errorHandler } = require('./middleware/errorMiddleware')
const dotenv = require('dotenv').config()
const cors = require('cors');
const port = process.env.PORT || 8000
const connectDB = require('./config/db')

connectDB()


const app = express();

app.use(cors())
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.get('/', (request, response) => {
    response.sendFile('index.html')
})

app.use('/api/character', require('./routes/characterRoutes'))

app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server Running on port ${port}`)
})