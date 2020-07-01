const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Message = new Schema(
    {
        _id: {type: String, required:true},
        name: {type: String, required: true},
        content: {type:String, required:true},
        date: {type:Number, required:true}
    },
);

module.exports = mongoose.model('messages', Message); //connects it to messages collection