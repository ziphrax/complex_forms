var express = require('express')
    ,bodyParser = require('body-parser')
    ,methodOverride = require('method-override')
    ,mongoose = require('mongoose')
    ,restify = require('express-restify-mongoose')
    ,app = express()
    ,router = express.Router();

app.use(bodyParser.json());
app.use(methodOverride());
app.use('/',express.static('client'));

mongoose.connect('mongodb://localhost/complex_forms');

//https://florianholzapfel.github.io/express-restify-mongoose/
restify.serve(router, mongoose.model('Customer', new mongoose.Schema({
  name: { type: String, required: true },
  comment: { type: String }
})));

app.use(router);

app.listen(3000, () => {
  console.log('Express server listening on port %s',port);
});
