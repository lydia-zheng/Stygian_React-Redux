//import mongoose module
const mongoose = require('mongoose');

//env file
require('dotenv').config();
let PASSWORD = process.env.DB_PASSWORD;

let DBNAME = "msg";

let MONGODBCONNECTIONURL = `mongodb+srv://mystic001:${PASSWORD}@stygian.eatfu.mongodb.net/${DBNAME}retryWrites=true&w=majority`

mongoose
        .connect(MONGODBCONNECTIONURL, {useNewUrlParser:true})
        .catch(e => {
            console.error('Connection error', e.message);
        });

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!');
});

//set up mongoose connection
const database = mongoose.connection;

module.exports = database;
