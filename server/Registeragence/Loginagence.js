const e = require('cors');
const express = require('express')
const router =  express.Router()
const mongoose = require("mongoose");
const Joi = require('@hapi/joi');
const Register = require('./signagence');
const jwt = require('jsonwebtoken');

router.post("/",  async (req, res) => {
	const id = jwt.verify(req.body.token, process.env.TOKEN_SECRET);
	const s = await Register.findOne({ agencename: id._id});
	const user = await Register.findOneAndReplace({ "agencename" : id._id }, {
		agencename: s.agencename,
		email: s.email,
		password: s.password,
		Ownername: req.body.Ownername,
		Ownerlastname: req.body.Ownerlastname,
		City : req.body.City,
		Ownerphone : req.body.Ownerphone,
        Agencephone : req.body.Agencephone,
		Agencebirthday : req.body.Agencebirthday,
		id : req.body.id,
		address : req.body.address,
	})
	try {
		await user.save();
		res.send("success");
	} catch (err){
		res.status(400).send(err);
	}
})

module.exports = router