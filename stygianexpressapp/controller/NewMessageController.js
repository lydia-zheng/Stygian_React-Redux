const Messages = require('../models/MsgModel');
var { uuid } = require('uuidv4');
/* const express = require('express');
 */

//TODO: implement create new message and save it to mongodb
const postMessage = async (req, res) => {
    const msg = new Messages(req.body);
    msg._id = uuid(); //create a new uuid for new message and save it as msg id

    msg.save()
    .then(message => {
        console.log("Message from post:",  message);
        res.status(200).send("item saved to database");
    })
    .catch(err => {
        res.status(400).send("unable to save to database");
    })
    
};

module.exports = {
    postMessage
}