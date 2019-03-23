const express = require("express");
const bodyParser=require("body-parser");

const app=express();
const port=process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.get('/api/world',(req,res)=>{
    res.send({express : 'Hello From Express'});
});

app.post('api/world',(req,res)=>
{
    console.log(req.body);
    res.send(
        `I recived your POST  request , This is what you sent me : ${req.body.post} `,
    );
});


app.listen(port,()=>console.log(`listening on the port ${port}`))