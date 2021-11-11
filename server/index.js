const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const app = express();


app.use(express.json());

app.use(cors());

mongoose.connect("mongodb+srv://hamza:hamza@rent.22coa.mongodb.net/Rental?retryWrites=true&w=majority", {
    useNewUrlParser: true,
});

const LoginRouter = require('./routes/Login')

app.use('/Register', LoginRouter)

const ProfileRouter = require('./routes/Profile')

app.use('/Profile', ProfileRouter)

const signRouter = require('./Register/Register')

app.use('/sign', signRouter)

const agenceRouter = require('./Registeragence/Registeragence')

app.use('/sign/Agence', agenceRouter)

const LoginagenceRouter = require('./Registeragence/Loginagence')

app.use('/Register/Agence', LoginagenceRouter)

const CheckcOra = require('./models/check')

app.use('/Check', CheckcOra)

const Admin = require('./Registeragence/Profileagence')

app.use('/Admin', Admin)

app.listen(3001)