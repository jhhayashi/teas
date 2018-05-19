const express = require('express')
const path = require('path')

const PORT = process.env.PORT || 3000
const BUILD_DIR = path.join(__dirname, 'dist')

const app = express()

app.use(express.static(path.join(BUILD_DIR)))

app.use('*', (req, res) => res.sendFile(path.join(BUILD_DIR, 'index.html')))

const server = app.listen(PORT)
console.log(`Server listening on port ${server.address().port}`)
