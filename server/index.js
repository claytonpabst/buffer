const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const config = require('./config.js');
const multer = require('multer');

const app = module.exports = express();
let upload  = multer({ storage: multer.memoryStorage() });

app.use(bodyParser.json());

// massive(config.connection)
// .then( db => {
//   app.set('db', db);
// })

app.use(express.static(__dirname + './../build'))

app.post('/test', upload.single('asset'), function(req, res) {  
  req.on('data', function(chunk){
    console.log(chunk)
  })
  req.on('end', function(){
    console.log(req.buffer)
    console.log(req.body);
    console.log(req.file);
    console.log(req.files);
    res.send();
  })
});

// app.post('/test', upload.array('asset'), (req, res) => {  
//   console.log(req.body)
//   console.log(req.file);
//   console.log(req.files);
//   res.send();
// });

//////////Endpoints for the front end




app.listen(config.port, console.log("you are now connected on " + config.port));
