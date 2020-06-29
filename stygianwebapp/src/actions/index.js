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

//api call actions
//Get initial message

export const getIm = () => {
  return dispatch => {
    dispatch(getImPending());

    axios
      .get('http://localhost:9000/messages')
            .then(res => {
              dispatch(getImSucess(res.data));              
              console.log("Res data:", res.data);//debug usg
            })
            .catch( err => {
                dispatch(getImFailure(err));
            } 
            )
    
  }
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
    error
  };
}



