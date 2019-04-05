const express = require('express')
const users = express.Router()
const jwt = require('jsonwebtoken')
const cors=require('cors')
const bcrypt=require('bcrypt')

const User=require("../models/User")

users.use(cors())

process.env.SECRET_KEY='secret'

users.post('/register',(req,res)=>
{
    res.send("hhhh")
    const today=new Date()
    const userData =
        {
            fisrt_name:req.body.first_name,
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

module.exports =users