const express = require('express');
const router = express.Router();
const { quotes } = require('../data');

/* GET quotes - render index template, passing it a title prop and the list of quotes */
router.get('/', (req, res, next) => {
  console.log('Home route called');
  res.render('index', { title: 'Code Quotes', quotes });
});

/* GET generated error route - create and throw 500 server error */
router.get('/error', (req, res, next) => {
  // Log out custom error handler indication
  console.log('Custom error route called');

  const err = new Error();
  err.message = `Custom 500 error thrown`;
  err.status = 500;
  throw err;
});

/* GET individual quote route */
router.get('/:id', (req, res, next) => {
  console.log(`Quote ${req.params.id} route called`);

  if (quotes[req.params.id]) {
    res.render('quote', { title: 'Code Quote', quote: quotes[req.params.id] });
  } else {
    err = new Error('Not Found');
    err.status = 404;
    next(err);
  }
});

module.exports = router;
