const Messages = require('../models/MsgModel');

const express = require('express');
const Request = require("request");

//TODO:messages are currently 404 not found
const getMessages = async (req, res) => {

    await Messages.find({}, (err, messages) => {
        
        if (err) {
            return res.status(400).json({success:false, error:err})
        }
        if(!messages.length) {

            return res
                .status(404)
                .json({sucess:false, error:`Messages not found`})
        }

        return res.status(200).json({sucess: true, data: messages})
        
   }).catch(err =>console.log(err))
};

module.exports = {
    getMessages
};