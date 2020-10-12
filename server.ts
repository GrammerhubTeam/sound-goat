const express = require('express')
const request = require('request')
const next = require('next')
const bodyParser = require('body-parser')
import axios from 'axios'
import api from './api'


const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const client_id = '55339ab7caba43bdbcf8b8438cea183c'
const client_secret = 'da0dbbd862c5455d996378522745839a'
const redirect_uri = 'http://localhost:4000'
const scope = 'user-read-private user-read-email'
const stateKey = 'spotify_auth_state'

const combineQueries = (obj: {[x: string]: string}) => {
  return '?' + Object.keys(obj).map((v: string) => `${v}=${obj[v]}`).join('&')
}

app.prepare()
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

  server.get('/soundcloud-login', (req, res) => {
    const state = 'biYe74ns9auR75KL'
    res.cookie(stateKey, state)

    res.redirect(`https://accounts.spotify.com/authorize${combineQueries({
      response_type: 'code',
      client_id,
      scope,
      redirect_uri,
      state,
    })}`)
  })

  server.get('/callback', (req, res) => {
    const code = req.query.code || null
    const state = req.query.state || null
    const storedState = req.cookies ? req.cookies[stateKey] : null

    if (state === null || state !== storedState) {
      res.redirect('/#' + combineQueries({ error: 'state_mismatch' }))
    } else {
      res.clearCookie(stateKey)
      const authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        form: {
          code,
          redirect_uri,
          grant_type: 'authorization_code',
        },
        headers: {
          'Authorization': 'Basic ' + (Buffer.from(client_id + ':' + client_secret).toString('base64')),
        },
        json: true,
      }

      request.post(authOptions, function(error, response, body) {
        if (!error && response.statusCode === 200) {
  
          var access_token = body.access_token,
              refresh_token = body.refresh_token;
  
          var options = {
            url: 'https://api.spotify.com/v1/me',
            headers: { 'Authorization': 'Bearer ' + access_token },
            json: true
          };
  
          // use the access token to access the Spotify Web API
          request.get(options, function(error, response, body) {
            console.log(body);
          });
  
          // we can also pass the token to the browser to make requests from there
          res.redirect('/#' +
            combineQueries({
              access_token: access_token,
              refresh_token: refresh_token
            }));
        } else {
          res.redirect('/#' +
            combineQueries({
              error: 'invalid_token'
            }));
        }
      });
    }
  })

  server.get('/refresh_token', function(req, res) {

    // requesting access token from refresh token
    var refresh_token = req.query.refresh_token;
    var authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      headers: { 'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')) },
      form: {
        grant_type: 'refresh_token',
        refresh_token: refresh_token
      },
      json: true
    };
  
    request.post(authOptions, function(error, response, body) {
      if (!error && response.statusCode === 200) {
        var access_token = body.access_token;
        res.send({
          'access_token': access_token
        });
      }
    });
  });

  server.post('/wines', async (req, res) => {
    try {
      const resp = await axios.get(`https://sampleapis.com/wines/api/${req.body.wineType}`)
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
.catch((ex:any) => {
  console.error(ex.stack)
  process.exit(1)
})