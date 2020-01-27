var express = require("express");
var app=express();
var port =process.env.PORT || 5000;
var mongodb= require('mongodb');

var Users=require('./routes/Users');

app.use('/users',Users);

app.get('/helo',(res,req)=>
{
  req.send("Hello world")
});

app.get('/thelist',function (req,res)
{
  var MongoClient = mongodb.MongoClient;

  var url='mongodb://localhost:27017/sampsite';

  MongoClient.connect(url,function(err,db)
  {
    if(err)
    {
      console.log('Unable to connect to the server');
    }
    else
    {
      console.log('Connection Established');
    }
  })
});

app.listen(port,() =>
{
  console.log("Server is running on port: "+port);
});
/*
router.get('/thelist',function (req,res)
{
  var MongoClient = mongodb.MongoClient;

  var url='mongodb://localhost:27017/sampsite';

  MongoClient.connect(url,function(err,db)
  {
    if(err)
    {
      console.log('Unable to connect to the server');
    }
    else
    {
      console.log('Connection Established');
    }
  })
});

express.listen(3000,() =>
{
  console.log("Server is running on port: "+port);
});
*/
