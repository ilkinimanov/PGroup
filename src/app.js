const express = require('express');
const mongoose = require('mongoose');
const indexRoutes = require('./routes/indexRoutes');
const adminRoutes = require('./routes/adminRoutes');
const morgan = require('morgan');
const dotenv = require('dotenv');

const app = express();

dotenv.config({
  path: './.env'
})


// App routes
app.use(indexRoutes);


module.exports = app;
