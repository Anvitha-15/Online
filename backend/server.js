var express = require('express');
var resto = require('./routes/resto');

var app = express();

app.use((req, res, next) => {

    res.header("Access-Control-Allow-Origin", "*");
  
    res.header("Access-Control-Allow-Methods", "*");
  
    res.header("Access-Control-Allow-Headers", "*");
  
    res.header("Access-Control-Allow-Credentials", "*");
  
    next();
  
  });

var st="<!DOCTYPE html><HTML><HEAD></HEAD><BODY>";
var et="</BODY></HTML>";

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ limit: "500mb", extended: true }));

// parse application/json
app.use(express.json({ limit: "500mb", extended: true }));
//http://localhost:4500/resto
app.use('/resto',resto);

//http://localhost:4500/
app.get("/",(req,res) => {
    res.send(st+"<H1>"+"Welcome to Online Car Wash Reservation"+"</H1>"+et);
});

app.listen(4500);