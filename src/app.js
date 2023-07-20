const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const dotenv = require('dotenv');

const app = express();

dotenv.config({
  path: './.env'
})


module.exports = app;
