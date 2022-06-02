const express = require('express')
const res = require('express/lib/response')
const router = express.Router()
const fs = require('fs')
const path = require('path')

// const { readPuppies, findPuppy } = require('./library')

const movieData = path.resolve('./data.json')

router.get('/moviedetails/:id', (req, res) => {
  const id = req.params.id
  showOneMovie(id, (movies) => {
    res.render('moviedetails', movies)
  })
})

function showMovies(cb) {
  fs.readFile('./movies.json', 'utf-8', (err, data) => {
    const movies = JSON.parse(data)
    cb(movies)
  })
}

function showOneMovie(id, callback) {
  showMovies((moviesData) => {
    const oneMovie = moviesData.movie_list.find((item) => {
      return item.id == id
    })
    callback(oneMovie)
  })
}

module.exports = router

//   // fs.readFile('./movies.json', 'utf-8', (err, data) => {
//   /const oneMovie = movieData.movie_list.find((item) => { return item.id == id
//   //   })
//   //   const movies = JSON.parse(data) // parse json(data)?
//   //   res.render('moviedetails', movies)
//   //   callback(oneMovie)
//   })
// }

// routes '/moviesdetails/:id'
// routes '/moviesdetails/:id/edit'
