require('dotenv').config()

const express = require('express')
const app = express()
const port = 3001

const cors = require('cors')

const routes = require('./src/routes/routes.routes')

app.use(cors())

app.use(express.json())

app.use(routes)

app.listen(port, () => {
    console.log(`A API esta sendo execurada na porta ${port}`)
})
