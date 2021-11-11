const e = require('cors');
const express = require('express')
const router =  express.Router()
const mongoose = require("mongoose");
const agence = require('../Registeragence/signagence');
const client = require('../Register/signup');
const jwt = require('jsonwebtoken');

router.post("/", async (req, res) => {
    const id = jwt.verify(req.body.token, process.env.TOKEN_SECRET);
    var user = "NoOne";
    const c = await client.findOne({ username: id._id});
    if (c)
        user = "Client";
    if (!c)
    {
        const a = await agence.findOne({ agencename: id._id});
        if (a)
            user = "Agence";
    }
    try{
        res.send(user);
    }
    catch(err){
        res.status(400).send(err);
    }
})

module.exports = router