const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const tweetsRouter = require('./controller/tweets');

const app = express();
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://localhost/users', {useNewUrlParser: true})
const conn = mongoose.connection;

conn.on('open', (err, data) => {
    if(err) {
        console.log('There is an error');
    }
    else {
        console.log('database connected')
    }
})

app.use('/', tweetsRouter)

app.listen(4000, () => {
    console.log('started at port 4000')
})