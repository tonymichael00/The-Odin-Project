const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Book = require('./models/book');
const bookRoutes = require('./routes/bookRoutes');

const app = express();

// connect to mongodb & listen for requests
const dbURI =
  'mongodb+srv://tonymichael00:5ummerRoss@bookstore.alkft.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(app.listen(3000))
  .catch((err) => console.log(err));

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

// routes
app.get('/', (req, res) => {
  res.redirect('index');
});

// book routes
app.use('/', bookRoutes);
