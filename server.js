const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Version 1.0')
})

app.listen(4000, () => {
  console.log('Server running on server 4000 ...')
})
