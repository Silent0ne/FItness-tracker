const path = require('path');
const express = require('express');
const mongoose = require('mongoose');


const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// needs to be fixed connected
// mongose.connect('mongodb://localhost/workout' ,{ 
//   useNewURLParser: true,
//   useFindAndmodify: false,
//   useUnifiedTopology: true,
// });

require('./routes/htmlRoutes')(app);

app.get('', function (req, res) {
  res.send('')
})

app.get('', function (req, res) {
  res.send('')
})


app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});