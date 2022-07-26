var express = require('express');
const client = require('../config/db_config');

module.exports.signup = async (req,res)=>{
    try{
        let username = req.body.username;
        let password = req.body.password;
        let name = req.body.name;
        let type = req.body.type;
        const result = await client.db("tutor").collection("account").insertOne({
            'name':name,
            'username':username,
            'password':password,
            'type':type
        });
        if(result.acknowledged)
            res.send("success");
        else
            res.send("failure");
    } catch(err){
        console.log(err);
    }
}

module.exports.signin = async (req,res)=>{
    try{
        let username = req.body.username;
        let password = req.body.password;
        let type = req.body.type;
        let result = await client.db("tutor").collection("account").find({
            'username':username,
            'password':password,
            'type':type
        });
        let resultVar = [];
        await result.forEach(element=>{resultVar.push(element)});
        if(resultVar.length > 0)
        res.send({message:"success",name:resultVar[0].name});
        else
            res.send({message:"failure"});
    } catch(err){
        console.log(err);
    }
}

module.exports.search = async (req,res)=>{
    try{
        let search = req.body.search;
        let result = await client.db("tutor").collection("company").find({
            'name':search
        });
        let resultVar = [];
        await result.forEach(element=>{resultVar.push(element)});
        res.send(resultVar);
    } catch(err){
        console.log(err);
    }
}

module.exports.book = async (req,res)=>{
    try{
        let id = req.body.id;
        let name = req.body.name;
        let subject = req.body.subject
        let username = req.body.username;
        let result = await client.db("tutor").collection("booking").insertOne({
            'id':id,
            'name':name,
            'subject':subject,
            'username':username,
            'status':"pending"
        });
        if(result.acknowledged)
            res.send("success");
        else
            res.send("failure");
    } catch(err){
        console.log(err);
    }
}

module.exports.loadBookings = async (req,res)=>{
    try{
        let username = req.body.username;
        let result = await client.db("tutor").collection("booking").find({
            'username':username
        });
        let resultVar = [];
        await result.forEach(element=>{resultVar.push(element)});
        res.send(resultVar);
    } catch(err){
        console.log(err);
    }
}

module.exports.addAdminData = async (req,res)=>{
    try{
        let result1 = await client.db("tutor").collection("company").find();
        let id = 0;
        await result1.forEach((element)=>{
            id+=1;
        });
        id+=1;
        let name = req.body.name;
        let subject = req.body.subject;
        let result = await client.db("tutor").collection("company").insertOne({
            'id':id,
            'name':name,
            'subject':subject
            
        });
        if(result.acknowledged)
            res.send("success");
        else
            res.send("failure");
    } catch(err){
        console.log(err);
    }
}

module.exports.adminLoadBookings = async (req,res)=>{
    try{
        let username = req.body.username;
        let result = await client.db("tutor").collection("booking").find({
            'name':username
        });
        let resultVar = [];
        await result.forEach(element=>{resultVar.push(element)});
        res.send(resultVar);
    } catch(err){
        console.log(err);
    }
}

module.exports.acceptBook = async (req,res)=>{
    try{
        let result = await client.db("tutor").collection("booking").updateOne(req.body,{$set:{'status':"accepted"}});
        console.log(result);
        if(result.modifiedCount > 0)
            res.send("success");
        else
            res.send("failure");
    } catch(err){
        console.log(err);
    }
}

module.exports.rejectBook = async (req,res)=>{
    try{
        let result = await client.db("tutor").collection("booking").updateOne(req.body,{$set:{'status':"rejected"}});
        if(result.modifiedCount > 0)
            res.send("success");
        else
            res.send("failure");
    } catch(err){
        console.log(err);
    }
}
