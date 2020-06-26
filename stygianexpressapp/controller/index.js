const Messages = require('../models/MsgModel');

const express = require('express');
const Request = require("request");

//TODO: not sure if the backend API answers properly to GET /messages and if React is fetching properly
const getMessages = async (req, res) => {

    await getMessages.find({}, (err, messages) => {

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