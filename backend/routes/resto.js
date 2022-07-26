var express = require('express');
const client = require('../config/db_config');
var resto_router = express.Router();
var service = require('../service/service');

var st="<!DOCTYPE html><HTML><HEAD></HEAD><BODY>";
var et="</BODY></HTML>";

// client.connect();

//http://localhost:4500/resto/
resto_router.post("/",(req,res)=>{
    res.send(
        st+"<H1>"+"Resto Router Works!<br>Welcome to our Online Restaurant!"+"</H1>"+et
    );
});

//http://localhost:4500/resto/signup
resto_router.post("/signup",service.signup);

//http://localhost:4500/resto/signin
resto_router.post("/signin",service.signin);

//http://localhost:4500/resto/search
resto_router.post("/search",service.search);

//http://localhost:4500/resto/book
resto_router.post("/book",service.book);

//http://localhost:4500/resto/loadBookings
resto_router.post("/loadBookings",service.loadBookings);

//http://localhost:4500/resto/addAdminData
resto_router.post("/addAdminData",service.addAdminData);

//http://localhost:4500/resto/adminLoadBookings
resto_router.post("/adminLoadBookings",service.adminLoadBookings);

//http://localhost:4500/resto/acceptBook
resto_router.post("/acceptBook",service.acceptBook);

//http://localhost:4500/resto/rejectBook
resto_router.post("/rejectBook",service.rejectBook);



module.exports = resto_router;