//import moduli
var express = require('express');
var app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
var MongoClient = require('mongodb').MongoClient;
var Client = require('node-rest-client').Client;
var client = new Client();
var mySQL = require('mysql');
var conn = mySQL.createConnection({
    host:"remotemysql.com",
    user:"mhJOLDRxsy",
    password:"trXOgghfWu",
    database:"mhJOLDRxsy"
});
app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
const cors = require('cors');
app.use(cors());

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/visualizzaMonopattini', function (req, res) {
    console.log('prova');
    MongoClient.connect('mongodb+srv://mattebranca:yapCFGM2Fg2Mb4Mj@matteo-723wl.mongodb.net/admin', function(err, db) {
      if (err) {
        throw err;
      }
      var dbo = db.db("Informatica");
      dbo.collection("Monopattino").find().toArray(function(err, result) {
        if (err) {
          throw err;
        }
        console.log(result);
        res.send(result);
        db.close();
      });
    });

});

app.listen(9000, function () {
  console.log('Example app listening on port 9000!');
});