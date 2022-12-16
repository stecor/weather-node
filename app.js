const express = require('express')
const https = require('https')
const app = express()
require('dotenv').config()
const apiKey = process.env.KEY

app.get('/', function (req, res) {
  const url =
    'https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=' + apiKey

  https.get(url, function (response) {
    console.log(response.statusCode)

    //res.sendFile(__dirname + '/index.html')
  })
})
//app.post('/', function (req, res) {})

// const query = 'London'
// const apiKey = '31811e523102e535fa75180f620b9dda'
// const unit = 'metric'
// const url =
//   'https://api.openweathermap.org/data/2.5/weather?q=' +
//   query +
//   '&appid=' +
//   apiKey +
//   '&units=' +
//   unit

// https.get(url, function (response) {
//   console.log(response.statusCode)

//   response.on('data', function (data) {
//     const weatherData = JSON.parse(data)
//     const temp = weatherData.main.temp
//     const weatherDescription = weatherData.weather[0].description
//     const icon = weatherData.weather[0].icon
//     const imageUrl = 'http://openweathermap.org/img/wn/' + icon + '@2x.png'

//     res.setHeader('Content-Type', 'text/html')

//     res.write(`<h3>The weather is currently ` + weatherDescription + `</h3>`)
//     res.write(
//       `<h1>The temperature in London is ` + temp + ` degrees Celsius </h1>`
//     )
//     res.write('<image src=' + imageUrl + '>')
//     res.send()
//   })
// })

// 3000 is the port number in my case.
app.listen(3000, function () {
  console.log('Server is running on port ' + 3000)
})
