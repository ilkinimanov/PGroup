const express = require('express');
const router = express.Router();
const indexControllers = require('../controllers/indexController');

router
  .route('/')
    .get(indexControllers.indexGet)
    .post(indexControllers.indexPost);


module.exports = router;
