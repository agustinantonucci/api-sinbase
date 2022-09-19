const express = require('express');
const app = express();
const api = require('./routes/api');
// import {PORT} from './config.js';

app.use(express.json());

app.use('/api', api);

const port = 6331 || 5000;
app.listen(port, () => console.log(`Listening on Port: ${port}`));

