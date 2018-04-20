const { describe, before, after, it } = require('mocha')
const { expect } = require('chai')
const request = require('request')
const createApp = require('../create-app')

describe('app', () => {
  const app = createApp()
  let server

  before(done => {
    server = app.listen(3000, () => {
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
      request(`http://localhost:3000`, (err, res, body) => {
        expect(err).equal(null)
        expect(res.statusCode).equal(200)
        expect(body).have.keys('name', 'description')
      })
      done()
    })
  })
})
