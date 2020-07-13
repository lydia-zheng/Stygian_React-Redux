//LOADS INITIAL MESSAGES VIA MONGOOSE SCHEMA TO INSERT DIRECTLY INTO MONGODB
const Message = require('../models/MsgModel');
var { uuid } = require('uuidv4'); 
const populateMessages = () => {
    let messages = [
        {
            "_id": uuid(),
            "name": "Turtle",
            "content": "When did you change my username??",
            //"date": "06/03/2020, 06:06:06 PM"
            "date": 1593293053 //unix timestamp
            
        },
        {   
            "_id": uuid(),
            "name": "Driz",
            "content": "Just now. Why?",
            //"date": "06/04/2020, 00:01:23 AM"
            "date": 1591228883
        },
        {   
            "_id": uuid(),
            "name": "Turtle",
            "content": "Urg. Nevermind that, did you hear about the news? Apparently..",
            //"date": "06/04/2020, 00:03:45 AM"
            "date": 1591229025
        },
        
        {
            "_id":uuid(),
            "name": "Driz",
            "content": "That we're all fictional? Yeah, no biggie.",
            //"date": "06/05/2020, 00:10:21 AM"
            "date": 1591315821
        }
    ];

    for(let i = 0; i <messages.length; i++ ){
        //iterate through messages and create a new message based on mongoose schema
        let newMessage = new Message(
            messages[i]
        );

        if(!newMessage){
            console.log("something's gone wrong!");
        }

        newMessage
            .save() //Inserts to db
            .then((error) => {
                console.log(error);
            })
    };
};

module.exports = populateMessages;