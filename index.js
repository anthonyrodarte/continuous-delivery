const createApp = require('./create-app')

const app = createApp()

app.listen(3000, () => {
  console.log('listening on port 3000')
})
