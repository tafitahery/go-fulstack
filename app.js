const express = require('express');
const mongoose = require('mongoose');

const stuffRouters = require('./routes/stuff');
const userRouters = require('./routes/user');

const app = express();

mongoose
  .connect(
    'mongodb+srv://tafita:lebo@cluster0.55d4v.mongodb.net/?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoBD échouée !'));

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  );
  next();
});

app.use('/api/stuff', stuffRouters);
app.use('/api/auth', userRouters);

module.exports = app;
