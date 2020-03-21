const express = require('express'); 
const path = require('path');
const open = require('open'); 
const cors = require('cors');

//middleware
const morgan = require('morgan');
const parser = require('body-parser');

const app = express();
const port = 3000; 
module.exports.app = app; 

app.use(cors());

//logging and parsing
app.use(morgan('dev'));
app.use(parser.json()); 

app.use(express.static(path.join(__dirname, '../public')));

app.listen(port, (err) => {
  if (err) {
    console.log(err); 
  } else {
    console.log(`Listening on ${port}`); 
  }
}); 