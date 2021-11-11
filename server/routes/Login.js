const e = require('cors');
const express = require('express')
const router =  express.Router()
const mongoose = require("mongoose");
const Joi = require('@hapi/joi');
const Register = require('../Register/signup');
const jwt = require('jsonwebtoken');

router.post("/",  async (req, res) => {
	const id = jwt.verify(req.body.token, process.env.TOKEN_SECRET);
	const s = await Register.findOne({ username: id._id});
	const user = await Register.findOneAndReplace({ "username" : id._id }, {
		username: s.username,
		email: s.email,
		password: s.password,
		Gender: req.body.Gender,
		Name: req.body.Name,
		Lastname : req.body.Lastname,
		City : req.body.city,
		phone : req.body.phone,
		Birthday : req.body.Birthday,
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