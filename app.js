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

//select post
app.get('/getPosts',(req,res)=>
{
    let sql='SELECT * FROM post';
    let query=db.query(sql,(err,results)=>
    {
        console.log(results);
        res.send(results);
    });
});

//find by id
app.get('/getPosts/:id',(req,res)=>
{
   let sql=`SELECT * FROM post WHERE id = ${req.params.id}`;
   let query=db.query(sql,(err,result)=>
   {
      if(err)throw err;
      res.send(result);
      console.log(result);
   });
});

//update post
app.get('/update/:id',(req,res)=>
{
    let newTitle='Update post'
    let sql=`UPDATE post SET title = '${newTitle}' WHERE id=${req.params.id}`;
    let query=db.query(sql,(err,result)=>
    {
        if(err)throw err;
        console.log(result);
        res.send('Post updated ...');
    });
});

app.listen('3000',()=>
    {
        console.log('Server started on port 3000');
    });