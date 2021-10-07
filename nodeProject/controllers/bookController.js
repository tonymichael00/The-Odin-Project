const Book = require('../models/book');

const book_index = (req, res) => {
   Book.find()
      .sort({ createdAt: -1 })
      .then((result) => {
         res.render('index', { books: result });
         console.log({ books: result });
      })
      .catch((err) => {
         console.log(err);
      });
};

// const book_details = (req, res) => {

// }

// const blog_details = (req, res) => {
//    const id = req.params.id;
//    Blog.findById(id)
//       .then((result) => {
//          res.render('details', { blog: result, title: 'Blog Details' });
//       })
//       .catch((err) => {
//          console.log(err);
//       });
// };

// const blog_create_get = (req, res) => {
//    res.render('create', { title: 'Create a new blog' });
// };

// const blog_create_post = (req, res) => {
//    const blog = new Blog(req.body);

//    blog
//       .save()
//       .then((result) => {
//          res.redirect('/blogs');
//       })
//       .catch((err) => {
//          console.log(err);
//       });
// };

// const blog_delete = (req, res) => {
//    const id = req.params.id;

//    Blog.findByIdAndDelete(id)
//       .then((result) => {
//          res.json({ redirect: '/blogs' });
//       })
//       .catch((err) => {
//          console.log(err);
//       });
// };

module.exports = {
   book_index,
   //    blog_details,
   //    blog_create_get,
   //    blog_create_post,
   //    blog_delete,
};
