const express = require('express');

const bookRouter = express.Router();
const dbClient = require('./databaseAccess');

const BookRepository = require('./bookRepository');
const bookRepository = new BookRepository(dbClient);

bookRouter.route('/books').get(async(req, res) => {
    try {
      const books = await bookRepository.getAllBooks();
      res.json(books);

    } catch (err) {
      console.error(err);
      res.status(500).send('Server error');
    }
  });

module.exports = bookRouter;
