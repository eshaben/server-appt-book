var knex = require('../db/knex')
var express = require('express')
var app = express()
var cors = require('cors')

app.use(cors());

app.get('/', (req, res) => {
  knex('appointment').select('*').then(appointments) => {
    res.json(appointments)
  }
})

app.listen(process.env.PORT || 8080)
