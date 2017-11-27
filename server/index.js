const express = require('express')
const body = require('body-parser')
const app = express()
const contractRouter = require('../routes/contract.js');

app.set('view engine','ejs')

app.use(body())
app.use('/contracts', contractRouter);




module.exports = app
