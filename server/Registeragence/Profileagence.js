const express = require('express')
const router =  express.Router()
const Register = require('./signagence');
const jwt = require('jsonwebtoken');

router.get("/", async (req, res) => {
    const id = jwt.verify(req.query.token, process.env.TOKEN_SECRET);
	const user = await Register.findOne({ agencename: id._id});
    try {
        res.send(user);
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router
