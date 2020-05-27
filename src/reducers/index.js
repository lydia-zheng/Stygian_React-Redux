import {combineReducers } from 'redux';


 const messageReducer = ( messageList = [
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
], action) => {
   //TODO: add more actions that reducer computes on; figure out if initialize_messages is correct
	if (action.type === 'ADD MESSAGES') {
		return messageList; //TODO: do something with the form and message
	}
	return messageList; //TODO: might need to change messageList = im in parameter
};

const initialForm = {
  v1: "",
  v2: ""
}

const formReducer = ( f = initialForm, action) => {
 switch (action.type){
  case "HANDLE_SUBMIT":
      //submit
      //TODO

    
  case "HANDLE_USER":
      //creating a copy wiht object.assign(), not mutating the original state
      return Object.assign({},f, {
        v1: action.value
      });  //THIS NEEDS TO KEEP TRACK OF INPUT
    
    //TODO: add another handlechange for separate text input
    case "HANDLE_MSG":
     return Object.assign({},f, {
        v2: action.value
      }); 
    
    default: return f; 
 }
 
};
 
export default combineReducers({
  //Todo: messageList not connected to rest action, state, etc
  messageList: messageReducer,
  f: formReducer
 
//anotherKey: anotherReducer //all your reducers should be combined
});

