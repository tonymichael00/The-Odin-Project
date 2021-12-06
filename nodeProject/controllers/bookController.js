const Book = require('../models/book');

// index
const bookIndex = (req, res) => {
  Book.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render('index', { books: result });
    })
    .catch((err) => {
      console.log(err);
    });
};

// create
const bookCreatePost = (req, res) => {
  const book = new Book(req.body);

  book
    .save()
    .then((result) => {
      res.redirect('/index');
    })
    .catch((err) => {
      console.log(err);
      // window.alert('Data Error');
      // location.reload();
    });
};

const bookCreateGet = (req, res) => {
  res.render('create');
};

// delete
const bookDeleteGet = (req, res) => {
  // const book = new Book(req.body);
  const search = document.querySelector('#book-search');

  // console.log(searchOptions.value.name);
  res.render('delete');
};

const bookSearch = (req, res) => {
  const book = new Book(req.body);
  const searchOptions = document.querySelector('#book-search');

  console.log(searchOptions.value.name);
  // book.find();
};

const bookDeletePost = (req, res) => {
  const book = new Book(req.body);
};

// update
const bookUpdateGet = (req, res) => {
  res.render('update');
};

// weather
const weatherGet = (req, res) => {
  res.render('weather');
};

module.exports = {
  bookIndex,
  bookCreatePost,
  bookCreateGet,
  bookDeletePost,
  bookDeleteGet,
  bookUpdateGet,
  bookSearch,
  weatherGet,
};
