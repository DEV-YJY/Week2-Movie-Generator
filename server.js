const express = require('express')
const hbs = require('express-handlebars')
const fs = require('fs')
const server = express()
const movies = require('./movies.json')
const path = require('path')

// Server configuration
server.use(express.static('public'))
server.use(express.urlencoded({ extended: false }))

// Handlebars configuration
server.engine('hbs', hbs.engine({ extname: 'hbs' }))
server.set('view engine', 'hbs')

// Your routes/router(s) should go here
// server.use('/puppies', routers)

// server.get('/', (req, res) => {
//   res.send('Hello world')
// })

// server.get('/', (req, res) => {
//   fs.readFile('./movies.json', 'utf-8', (err, data) => {
//    res.render('home', JSON.parse(data))
//   })
// })

// Render puppies on 
server.get('/', (req, res) => {
  let filePath = path.resolve('./movies.json')
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      console.err(err.message)
      return
    }
    const movies = JSON.parse(data)
    res.render('home', movies)
    console.log(movies)
    //res.send(puppies)
  })
})


//ViewData
// server.get('/', (req, res) => {
//   const viewData = {
//     movies: movies,
//   }

//   const template = 'home'
//   res.render(template, viewData)
// })





module.exports = server