const express = require('express');
const mysql=require('mysql');

//create connection

const db=mysql.createConnection
(
    {
        host: 'localhost',
        user: 'root',
        password:'',
        database:'myDb'

    }
);
const app=express();

app.listen('3000',()=>
    {
        console.log('Server started on port 3000');
    });