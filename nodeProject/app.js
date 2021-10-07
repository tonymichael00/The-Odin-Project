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
   .then((result) => app.listen(3000))
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

//retrieve form data
app.post('/books', (req, res) => {
   const book = new Book(req.body);

   book
      .save()
      .then((result) => {
         res.redirect('/index');
      })
      .catch((err) => {
         console.log(err);
      });
});

//retrieve book list
////
// const blog_index = (req, res) => {
//    Blog.find()
//       .sort({ createdAt: -1 })
//       .then((result) => {
//          res.render('index', { blogs: result, title: 'All blogs' });
//       })
//       .catch((err) => {
//          console.log(err);
//       });
// };
//console.log();

app.get('/', (req, res) => {
   res.redirect('index');
});
app.get('/index', (req, res) => {
   res.render('index');
});
app.get('/create', (req, res) => {
   res.render('create');
});
app.get('/update', (req, res) => {
   res.render('update');
});
app.get('/delete', (req, res) => {
   res.render('delete');
});

//app.use('/', bookRoutes);

// const express = require('express');
// const morgan = require('morgan');
// const mongoose = require('mongoose');
// const Blog = require('./models/blog');
// const blogRoutes = require('./routes/blogRoutes');

// // express app
// const app = express();

// // connect to mongodb & listen for requests
// const dbURI =
//    'mongodb+srv://tonymichael00:5ummerRoss@nodetuts.bco79.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

// mongoose
//    .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
//    .then((result) => app.listen(3000))
//    .catch((err) => console.log(err));

// // register view engine
// app.set('view engine', 'ejs');

// // middleware & static files
// app.use(express.static('public'));
// app.use(express.urlencoded({ extended: true }));
// app.use(morgan('dev'));
// app.use((req, res, next) => {
//    res.locals.path = req.path;
//    next();
// });

// // routes
// app.get('/', (req, res) => {
//    res.redirect('/blogs');
// });

// app.get('/about', (req, res) => {
//    res.render('about', { title: 'About' });
// });

// //blog routes
// app.use('/blogs', blogRoutes);

// // 404 page
// app.use((req, res) => {
//    res.status(404).render('404', { title: '404' });
// });
