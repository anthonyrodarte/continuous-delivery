const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.json({
    name: 'continuous-integration',
    description: 'A practice repository for testing and deployment.'
  })
})

app.listen(3000, () => {
  console.log('listening on 3000')
})
