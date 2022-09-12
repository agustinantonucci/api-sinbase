const express = require('express');
const app = express();
const api = require('./routes/api');

app.use(express.json());

app.use('/api', api);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on Port: ${port}`));

