const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Message = new Schema(
    {
        _id: {type: Number, required:true},
        name: {type: String, required: true},
        content: {type:String, required:true},
        date: {type:String, required:true}
    }
)

module.exports = mongoose.model('messages', Message);