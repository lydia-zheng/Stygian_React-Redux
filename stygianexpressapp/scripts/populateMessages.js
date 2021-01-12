//LOADS INITIAL MESSAGES VIA MONGOOSE SCHEMA TO INSERT DIRECTLY INTO MONGODB
const Message = require('../models/MsgModel');
var { uuid } = require('uuidv4'); 
const populateMessages = () => {
    let messages = [
        {
            "_id": uuid(),
            "name": "Turtle",
            "content": "When did you change my username??",
            // "date": 1593293053 //unix timestamp
            "date": 03 +':' +19+':'+20
            
        },
        {   
            "_id": uuid(),
            "name": "Driz",
            "content": "Just now. Why?",
           
            //"date": 1591228883
            "date": 03 +':' +20+':'+11
        },
        {   
            "_id": uuid(),
            "name": "Turtle",
            "content": "Urg. Nevermind that, did you hear about the news? Apparently..",
            //"date": 1591229025
            "date": 04 +':' +10+':'+33
        },
        
        {
            "_id":uuid(),
            "name": "Driz",
            "content": "That we're all fictional? Yeah, no biggie.",
            //"date": 1591315821
            "date": 04 +':' +13+':'+19
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