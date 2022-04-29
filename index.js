const { create } = require('domain');
const express = require('express');
const jwt = require('jsonwebtoken');
const morgan = require('morgan');
const app = express();

app.use(express.json());
app.use(morgan('dev'));


app.use('/api', require('./routes/create'));
app.use('/api', require('./routes/update'));
app.use('/api', require('./routes/delete'));
app.use('/api', require('./routes/read'));

app.set('port', process.env.PORT || 5000);

app.listen(process.env.PORT, () => {
    console.log('Listening on port 3000');
  });