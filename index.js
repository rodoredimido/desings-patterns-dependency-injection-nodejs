const express = require('express')
const axios = require('axios')
const app = express()
const { get } = require('./handlers')
const PORT = 3000

app.get('/', get(axios))

app.listen(PORT, () => console.log(`Example listening on port ${PORT}`))