require('dotenv/config')
const createApp = require('./create-app')

const app = createApp()

app.listen(process.env.PORT, () => {
  console.log('listening on port', process.env.PORT)
})
