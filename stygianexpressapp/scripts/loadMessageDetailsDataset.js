// old file that directly inserts via mongodb
db = db.getSiblingDB("msg"); //since can't use "use db" helper, this provides an alternative
db.messageDetails.drop();
db.messageDetails.insertMany([
    {
        _id: 1,
        name: "Turtle",
        content: "When did you change my username??",
        date: "06/03/2020, 06:06:06 PM"
        
    },
    {   
        _id: 2,
        name: "Driz",
        content: "Just now. Why?",
        date: "06/04/2020, 00:01:23 AM"
    },
    {   
        _id: 3,
        name: "Turtle",
        content: "Urg. Nevermind that, did you hear about the news? Apparently..",
        date: "06/04/2020, 00:03:45 AM"
    },
    
    {
        _id: 4,
        name: "Driz",
        content: "That we're all fictional? Yeah, no biggie.",
        date: "06/05/2020, 00:10:21 AM"
    }
]);  


