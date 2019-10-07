const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { resolve } = require('path');

const routes = require('./routes');

const app = express();

mongoose.connect(
  'mongodb+srv://aircnc:aircnc@aircnc-82fbu.azure.mongodb.net/AirCnC?retryWrites=true&w=majority',
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }
);

app.use(cors());
app.use(express.json());
app.use('/files', express.static(resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(3333);
