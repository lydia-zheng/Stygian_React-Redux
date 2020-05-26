import {combineReducers } from 'redux';
/* const im =
[
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
   ] */


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

const formReducer = (value='', action) => {
 
  if (action.type ==="HANDLE_SUBMIT") {
    //submit
    return ;
  }
  else if (action.type === "HANDLE_CHANGE") {
    //typing in form input; FIXED!! Finally text shows up!!
    return value = action.input; //THIS NEEDS TO KEEP TRACK OF INPUT
  }
  return value; 
};
 
export default combineReducers({
  //Todo: messageList not connected to rest action, state, etc
  messageList: messageReducer,
	value: formReducer
//anotherKey: anotherReducer //all your reducers should be combined
});

//alter