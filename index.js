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

app.get('/appointment/:id', (req, res) => {
  let id = req.params.id
  knex('appointment').where('id', id).first().then(appointment => {
    res.json(appointment)
  })
})

app.listen(process.env.PORT || 5000)
