const express = require('express');
const router =  express.Router();
const mongoose = require('mongoose');
const Joi = require('@hapi/joi');
const Register = require('./signagence');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dot = require("dotenv").config();

const Schema = {
    agencename : Joi.string().min(8).max(40).required(),
    email : Joi.string().min(6).max(50).required().email(),
    password : Joi.string().min(8).max(50).required(),
    confirmation : Joi.any().valid(Joi.ref('password')).required().options({
        language: {
           any: {
              allowOnly: 'must match Password'
           }
        }
     }),
}

const schema1 = {
    email: Joi.string().min(6).max(50).required().email(),
    password: Joi.string().min(8).max(50).required(),
}

router.post("/up", async (req, res) => {
    const { error } = Joi.validate(req.body, Schema);
    if ( error ) return res.send({s: error.details[0].message});

    const  emailexist  = await Register.findOne({ email: req.body.email });
    if (emailexist) return res.send({s: '"email" already exists'});

    const  userexist = await Register.findOne({ agencename: req.body.agencename });
    if (userexist) return res.send({s: '"username" already exists'});

    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedpassword  = await bcrypt.hash(req.body.password, salt);


    const user = new Register({
        agencename: req.body.agencename,
        email: req.body.email,
        password: hashedpassword,
        Ownername: "nothing",
        Ownerlastname: "nothing",
        City: "nothing",
        Ownerphone: "nothing",
        Agencephone: "nothing",
        Agencebirthday: "nothing",
        id: "nothing",
        address: "nothing",
    });

    const token = jwt.sign({_id: user.agencename}, process.env.TOKEN_SECRET);
    try{
        await user.save();
        res.header('auth-token', token).send({s: "success", token: token});
    }catch(err){
        console.log(err);
        res.status(400).send(err);
    }
});

router.post("/in", async (req, res) => {
    const { error } =  Joi.validate(req.body, schema1);
    if (error) return res.send({s: error.details[0].message});

    const	user  = await Register.findOne({ email: req.body.email });
    if (!user) return res.send({s: '"email" not exists'});

    const validPass = await bcrypt.compare(req.body.password, user.password);
	if (!validPass) return res.send({s: '"password" Invalid'});

    //generate jwt

    const token = jwt.sign({_id: user.agencename}, process.env.TOKEN_SECRET);
    res.header('auth-token', token).send({s: "success", token: token});


})

module.exports = router