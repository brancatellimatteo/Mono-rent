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

        conn.query('SELECT * FROM Utente_PF WHERE username = "' + username + '" AND password = "' + pass + '"', function(err, result, fields) {
            if (err) throw err;
            if(result.length > 0){
                res.send(true);
                console.log("Login corretto");
            }else{
                res.send(false);
            }
        });
})

app.post('/registrazione', function(req, res) {

    var name = req.query.name;
    var surname = req.query.surname;
    var dataN = req.query.dataN;
    var email = req.query.email;
    var uname = req.query.username;
    var psw = req.query.password;

        conn.query('INSERT INTO Utente_PF(nome,cognome,dataN,email,username,password) VALUES("' + name + '","' + surname + '","' + dataN + '","' + email + '","' + uname + '","' + psw + '")', function(err, result, fields) {
            if (err) throw err;
            res.send(result);
        });
})

app.get('/visualizzaMonopattini', function (req, res) {
    console.log('prova')
    var args = {};
    //chiamata al web service
    client.get("https://9000-c828032b-866f-4fc3-acf7-95f97f5abe5c.ws-eu0.gitpod.io/visualizzaMonopattini", args, function (data, response) {
        console.log(data);
        res.send({result: data});
    });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});