const { describe, before, after, it } = require('mocha')
const { expect } = require('chai')
const request = require('request')
const createApp = require('../create-app')
require('dotenv/config')

describe('app', () => {
  const app = createApp()
  let server

  before(done => {
    server = app.listen(process.env.PORT, () => {
      done()
    })
  })

  after(done => {
    server.close(() => {
      done()
    })
  })

  describe('GET /', () => {
    it('GET /', done => {
      request(`http://localhost:${process.env.PORT}`, (err, res, body) => {
        console.log(body)
        expect(err).equal(null)
        expect(res.statusCode).equal(200)
        expect(body).to.equal(
          'https://github.com/anthonyrodarte/continuous-delivery'
        )
      })
      done()
    })
  })
})
