var knex = require('./db/knex')
var express = require('express')
var app = express()
var cors = require('cors')

app.use(cors());

app.get('/appointment', (req, res) => {
  knex('appointment').select('*').then(appointments => {
    res.json(appointments)
  })
})

app.listen(process.env.PORT || 5000)
