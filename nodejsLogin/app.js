var express = require('express');

var app = express();

app.get('/', function(req, res)
{

    res.sendFile(__dirname + '/index.html');

})

app.get('/Home', function(req, res)
{

    res.sendFile(__dirname + '/home.html');

})

app.get('/Login', function(req, res)
{

    res.sendFile(__dirname + '/index.html');

})


app.get('/registration', function(req, res)
{

res.sendFile(__dirname + '/registration.html');

})

app.get('/Signup', function(req, res)
{

res.sendFile(__dirname + '/registration.html');

})
app.listen(7000,()=>
{
    console.log("server is working");

})
