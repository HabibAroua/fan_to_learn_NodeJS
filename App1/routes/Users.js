const express = require('express')
const users = express.Router()
const jwt = require('jsonwebtoken')
const cors=require('cors')
const bcrypt=require('bcrypt')

const User=require("../models/User")

users.use(cors())

process.env.SECRET_KEY='secret'

users.get('/test',(req,res)=>
{
    res.send("This test page");
})
users.post('/register',(req,res)=>
{
    const today=new Date()
    const userData =
        {
            first_name:req.body.first_name,
            last_name:req.body.last_name,
            email:req.body.email,
            password:req.body.password,
            created: today
        }
        User.findOne({
            where: {
                email:req.body.email
            }
        })
            .then(user=>{
                if(!user)
                {
                    bcrypt.hash(req.body.password, 10,(err,hash)=>{
                        userData.password=hash
                        User.create(userData)
                            .then(user =>{
                                res.json({status: user.email+ ' registered'})
                            })
                    })
                }
                else
                {
                    res.json({error: "User already exists"})
                }
            })
            .catch(err=>{
                res.send('error: '+err)
            })
})

users.post('/login',(req,res)=>
{
    User.findOne(
        {
            where:
                {
                    email: req.body.email
                }
        })
        .then(user=>
        {
            if(user)
            {
                if(bcrypt.compareSync(req.body.password,user.password))
                {
                    console.log("password is correct inst 1");
                    let token = jwt.sign(user.dataValues,process.env.SECRET_KEY , {
                        expiresIn: 1440
                    })
                    console.log("password is correct inst 2");
                    //res.send(token)
                    res.send("Email and password are correct");
                }
                else
                {
                    res.status(400).json({error: 'User does not exist'})
                    console.log("password is not correct")
                }
            }
        })
        .catch(err=>
        {
            res.status(400).json({error: err})
        })
})
module.exports =users