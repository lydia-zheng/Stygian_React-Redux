import axios from 'axios';




//TODO: if time permitted extract action strings into a constant.js with action object
export const handleUser = (input_name1, value) => {
  return {
    type: "HANDLE_USER",
    //add could be called payload or anything used in action
    input_name1,
    value
  };
}

export const handleMsg = (input_name2, value) => {
  return {
    type: "HANDLE_MSG",
    input_name2,
    value
  };
}

export const handleSubmit = (newMsg) => {
  return {
    type: "HANDLE_SUBMIT",
    newMsg
  }
}

export const initializeName = (name) => {
  return {
    type: "INITIALIZE_NAME",
    name 
  }
}

export const initializeMsg = (msg) => {
  return {
    type: "INITIALIZE_MSG",
    msg 
  }
}

export function getActiveMsg(id) {
  return {
    type: "GET_ACTIVE_MSG",
    id
  };
}

export function getDelete(id) {
  return {
    type: "GET_DELETE",
    id
  };
}

export const getImPending = () =>{
  return {
    type: "GET_IM_PENDING",
  };
}
export const getImSucess = (msg) => {
  return {
    type: "GET_IM_SUCESS",
    msg
  };
}
export const getImFailure = (error) =>{
  return {
    type:"GET_IM_FAILURE",
    //error : { error }
    error
  };
}

export const postMessagePending = () => {
  return {
    type: "POST_MESSAGE_PENDING"
  }
}

export const postMessageSuccess = (response, newMsg) => {
  return {
    type: "POST_MESSAGE_SUCCESS",
    response,
    newMsg //unsure if this is alright; need it for rendering after post
  }
}

export const postMessageFailure = (error) => {
  return {
    type: "POST_MESSAGE_FAILURE",
    error 
  }
}

/*API CALL ACTIONS*/


//Get initial message
export const getIm = () => {
  return dispatch => {
    dispatch(getImPending());

    axios
      .get('http://localhost:9000/messages') //change to broken url for testing error handling 
            .then(res => {
              dispatch(getImSucess(res.data.data));   //first data is the general api response data, second for data field which returns the array           
              //console.log("Res data:", res.data.data);//debug use
            })
            .catch( err => {
                console.log("Im error:", err);//debug use
                dispatch(getImFailure(err));
            } 
            )
    
  }
}

export const postMessage = (newMsg) => {
  return dispatch => {
    dispatch(postMessagePending());

    axios
      .post('http://localhost:9000/add', newMsg)//change to broken url for testing error handling 
      .then(res => {
        dispatch(postMessageSuccess(res.data.data, newMsg)); //debug
        //console.log("Res data:", res.data.data);
      })
      .catch (err => {
        dispatch(postMessageFailure(err));
      })
  }
}

