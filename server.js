const http = require('http');
const path = require('path');
const fs = require('fs');
const express = require('express');
//const mongose = require('mongose');


const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get
//require('/routes/htmlRoutes')(app);

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});