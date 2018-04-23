const express = require('express')

module.exports = function createApp() {
  const app = express()

  app.get('/', (req, res) => {
    res.send('https://github.com/anthonyrodarte/continuous-delivery')
  })
  return app
}
