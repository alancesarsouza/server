const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const c = require('./src/config/constants')

// Started App
const app = express();

// Started DataBank && Started Models
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });
requireDir('./src/models')

// Started Routes 
app.use(c.routes.api, require('./src/routes'))

// Listen Port
app.listen(3001);
