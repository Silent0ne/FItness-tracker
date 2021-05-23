const http = require('http');
const fs = require('fs');
const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/htmlRoutes')(app);

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});