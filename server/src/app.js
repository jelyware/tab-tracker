/*eslint-env es2021*/
//the above comment fixes Eslint Parsing error: The keyword 'const' is reserved

console.log('I am a web app!');
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors()) //if cors enabled then you need to have really great security for your app!

app.get('/status', (req, res) => {
  res.send({
    message: 'hello world!'
  })
})

app.listen(process.env.PORT || 8080)
