const express = require('express')
const winston = require('winston');
const expressWinston = require('express-winston');
const app = express()
app.use(expressWinston.logger({
    transports: [
      new winston.transports.Console()
    ],
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.json()
    ),
    meta: false,
    msg: "HTTP  ",
    expressFormat: true,
    colorize: false,
    ignoreRoute: function (req, res) { return false; }
  }));


const port = 3000
/**
 * Just an Object to send as test
 */
const students =[
    {
        name:"Mani",
        Age:24
    },
    {
        name:"sahar",
        Age:33
    }
]
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/students', (req, res) => {
  res.send(students)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})