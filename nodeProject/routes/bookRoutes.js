const express = require('express');
const bookController = require('../controllers/bookController');

const router = express.Router();

router.get('/index', bookController.bookIndex);
router.post('/', bookController.bookCreatePost);
router.get('/create', bookController.bookCreateGet);
router.get('/update', bookController.bookUpdateGet);
// router.post('/', bookController.book_delete_post);
// router.get('/delete', bookController.book_search);
router.get('/delete', bookController.bookDeleteGet);
router.get('/weather', bookController.weatherGet);

// 404 page
router.use((req, res) => {
  res.status(404).render('404');
});

module.exports = router;
