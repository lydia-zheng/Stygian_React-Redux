import {combineReducers } from 'redux';

//**initial state constants**

const im = {
   messages: [
  {
      name: "Turtle",
      content: "When did you change my username??"
  },
  {
      name: "Driz",
      content: "Just now. Why?"
  },
  {
      name: "Turtle",
      content: "Urg. Nevermind that, did you hear about the news? Apparently.."
  },
  {
      name: "Driz",
      content: "That we're all fictional? Yeah, no biggie."
  }
]

}
 
const initialForm = {
  v1: "",
  v2: ""
}




//**Reducers** TODO: Might need to combine messageReducer into formReducer

const messageReducer = (messages = im, action) => {
   //TODO: add more actions that reducer computes on; figure out if initialize_messages is correct
   switch (action.type)
   {

     case "HANDLE_SUBMIT":
       //adds the submitted message to the existing im
      return {
        //concat newMsg to array of messages
        messages: [...messages.messages, action.newMsg], //spread attribute : ...
      }

     case "GET_DELETE":
       return {
         //return the filtered message list that's not the deleted id
         messages: messages.messages.filter((m, i) => i!== action.id),
       }


     default: return messages; //returns object of array of messages
    }; 
};



const formReducer = ( f = initialForm, action) => {
 switch (action.type){
    
  case "HANDLE_USER":
      //creating a copy wiht object.assign(), not mutating the original state; assigns v1 to be action's value
      return Object.assign({},f, {
        v1: action.value
      });  //THIS NEEDS TO KEEP TRACK OF INPUT
    
    
  case "HANDLE_MSG":
     return Object.assign({},f, {
        v2: action.value
      }); 
    
    default: return f; 
 }
 
};

 const detailsReducer = (id= null, action) => {
  switch (action.type){
    //grab the index of the active message to display modal for
    case "GET_ACTIVE_MSG":
      
      return id = action.id;

    default: return id;
  }
}; 


 
export default combineReducers({
  //Todo: messageList not connected to rest action, state, etc
  messages: messageReducer,
  f: formReducer,
  id: detailsReducer

 
//anotherKey: anotherReducer //all your reducers should be combined
}
);

