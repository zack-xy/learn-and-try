const express = require('express')
const path = require('path');
const app = express()

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('index', {title: 'Hey', message: 'Hello there!'})
})

app.listen(4000)
