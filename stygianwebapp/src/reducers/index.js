import {combineReducers } from 'redux';

//**initial state constants**

//**TODO**: comment this out/readjust to be empty object; have get request handle grabbing initial data
const initialState = {
  getInitialMessages: {
    isPending: false,
    isSuccess: false,
    isFailure: false,
  },
   messages: [
]

}
 
const initialForm = {
  v1: "",
  v2: ""
}




//**Reducers** TODO: Might need to combine messageReducer into formReducer

const messageReducer = (messages = initialState, action) => {
   //TODO: add more actions that reducer computes on; figure out if initialize_messages is correct
   switch (action.type)
   {
     
     case "HANDLE_SUBMIT":
       //adds the submitted message to the existing im
      return {
        //concat newMsg to array of messages;
        //TODO: messages.message may be changed due to structure change 
        ...messages, //should be grabbing the 3 booleans
        messages: [...messages.messages, action.newMsg], //spread attribute : ...
      }

     case "GET_DELETE":
       return {
         //return the filtered message list that's not the deleted id
        //TODO: messages.message may be changed due to structure change
        ...messages, //should be grabbing three booleans
         messages: messages.messages.filter((m, i) => i!== action.id),
       }
       case "GET_IM_PENDING":
         //mark state as "loading" so it can show spinner or something
         //reset all errors
         return {
           ...messages, //spread operator: same as object.assign but cleaner
           getInitialMessages : {
             isPending: true,
             isSuccess: false,
             error: null,
           },

         };
       
       case "GET_IM_SUCESS":
          //Todo: API fetch call to grab initial messages
          //All done: set pending to false
          //replace items with ones returned from server
          return {
            ...messages,
            getInitialMessages : {
              isPending: false,
              isSuccess: true,
              error: null,
            },
            messages: action.msg

          }; 
       case "GET_IM_FAILURE":
         //failed but is done
         //save the error so we can display it somewhere
         //since it failed:
        
          return {
            ...messages,
            getInitialMessages : {
              isPending: false,
              isSuccess: false,
              error: action.error,
            },
            messages: []
             //tentative: no messages displayed-> can also keep them around!
             //edit later
          }; 


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

