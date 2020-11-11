const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')
import axios from 'axios'
import api from './api'

require('dotenv').config()

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()
    server.use(bodyParser.urlencoded({ extended: false }))
    server.use(bodyParser.json())
    server.use('/api', api)

    server.get('/p/:id', (req, res) => {
      const actualPage = '/post'
      const queryParams = { id: req.params.id }
      app.render(req, res, actualPage, queryParams)
    })

    server.get('/', (req, res) => {
      const actualPage = '/home'
      const queryParams = { id: req.params.id }
      app.render(req, res, actualPage, queryParams)
    })

    server.post('/wines', async (req, res) => {
      try {
        const resp = await axios.get(
          `https://sampleapis.com/wines/api/${req.body.wineType}`
        )
        res.send({ error: false, datum: resp.data })
      } catch (err) {
        res.send({ error: true, datum: err })
      }
    })

    // This is here to catch all other routes
    server.get('*', (req, res) => {
      return handle(req, res)
    })

    // This starts the server
    server.listen(process.env.PORT || 3002, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${process.env.PORT || 3002}`)
    })
  })
  .catch((ex: any) => {
    console.error(ex.stack)
    process.exit(1)
  })
