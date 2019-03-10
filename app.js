const express = require('express');
const mysql=require('mysql');

//create connection

const db=mysql.createConnection
(
    {
        host: 'localhost',
        user: 'root',
        password:'',
        database: 'nodemysql'
    }
);

//Connect
db.connect((err)=>
{
    if(err)
    {
        throw err;
    }
    console.log('MySql connected ...');
});
const app=express();

//Create database
app.get('/createdb',(req,res)=>
{
    let sql='CREATE DATABASE nodemysql';
    db.query(sql,(err,result)=>
    {
        if(err) throw err;
        console.log('Database created ...');
    });
});

//Create table
app.get('/createpoststable' , (req,res)=>
{
    let sql='CREATE TABLE post (id int PRIMARY KEY AUTO_INCREMENT  , title varchar(255) , body varchar(255))';
    db.query(sql,(err,result)=>
    {
        if(err)throw err;
        console.log(result);
        res.send('Post table created ....');
    });
});

//insert a post
app.get('/addPost',(req,res)=>
{
   let post={title :'The Post' , body: 'This is a post'};
   let sql='INSERT INTO post SET ?';
   let query=db.query(sql,post,(err,result)=>
   {
      if(err)throw err;
       res.send('This post added ....');
      console.log('This post added ...');
   });
});

app.listen('3000',()=>
    {
        console.log('Server started on port 3000');
    });