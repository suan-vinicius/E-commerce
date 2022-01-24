const express = require('express')
const routes = require('./routes/routes');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

mongoose.connect(process.env.MONGODB_URI, 
    {useNewUrlParser: true, useUnifiedTopology: true},
    (err) => {
        if (err) return console.log('Error:', err);
        console.log('Connection On');
    }
);

app.use(express.json());
app.use('/uploads', express.static('server/uploads'));
app.use('/', routes);

app.listen(5500, () => {
    console.log('Start Server');
});