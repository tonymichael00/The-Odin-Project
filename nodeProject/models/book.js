const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema(
   {
      title: {
         type: String,
         required: true,
      },
      author: {
         type: String,
         required: true,
      },
      datePub: {
         type: String,
         //required: true,
      },
      isbn: {
         type: Number,
         required: true,
      },
   },
   { timestamps: true }
);

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;

// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const blogSchema = new Schema(
//    {
//       title: {
//          type: String,
//          required: true,
//       },
//       snippet: {
//          type: String,
//          required: true,
//       },
//       body: {
//          type: String,
//          required: true,
//       },
//    },
//    { timestamps: true }
// );

// const Blog = mongoose.model('Blog', blogSchema);
// module.exports = Blog;
