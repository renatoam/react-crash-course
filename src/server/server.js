const express = require('express')
const cors = require('cors')
const cookieParser = require("cookie-parser")
const bodyParser = require('body-parser')
const router = require('./routes')
const server = express()

const corsOptions = {
  origin: 'http://127.0.0.1:5173',
  credentials: true
}

server.use(cors(corsOptions))
server.use(cookieParser())
server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())
server.use(router)
server.get('/', (_, res) => {
  return res.send('Nothing here. Try /users or /cards')
})

server.listen(3004, () => {
  console.log("Node server is running!")
})
