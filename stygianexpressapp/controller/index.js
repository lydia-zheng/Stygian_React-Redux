const Messages = require('../models/MsgModel');

const express = require('express');


//retrieves messages from mongodb via mongoose
const getMessages = async (req, res) => {

    await Messages.find({}, (err, messages) => {
        
        if (err) {
            return res.status(400).json({success:false, error:err})
        }
      
        return res.status(200).json({success: true, data: messages}) 
        
   }).catch(err =>console.log(err))
};

module.exports = {
    getMessages
};