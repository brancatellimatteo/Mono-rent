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

app.post('/login', function(req, res) {

    var username = req.query.username;
    var pass = req.query.password;

    conn.connect(function(err) {
        if (err) throw err;
        conn.query('SELECT * FROM utente WHERE username = "' + username + '" AND password = "' + pass + '"', function(err, result, fields) {
            if (err) throw err;
            if(result.length > 0){
                res.send(true);
                console.log("Login corretto");
            }else{
                res.send(false);
            }
        });
    });
})


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});