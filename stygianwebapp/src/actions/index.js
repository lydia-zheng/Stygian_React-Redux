import axios from 'axios';
require('dotenv').config();
axios.defaults.baseURL = process.env.HEROKU_URL || "https://stygianserver.herokuapp.com/"
//'http://localhost:9000'; 



//TODO: if time permitted extract action strings into a constant.js with action object
export const handleUser = (input_name1, value) => {
  //add could be called payload or anything used in action
  return {
    type: "HANDLE_USER",
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

export const getActiveMsg = (id) => {
  return {
    type: "GET_ACTIVE_MSG",
    id
  };
}

export const getDelete = (id) => {
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
   //error : { error }
  return {
    type:"GET_IM_FAILURE",
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
    newMsg 
  }
}

export const postMessageFailure = (error) => {
  return {
    type: "POST_MESSAGE_FAILURE",
    error 
  }
}

export const deleteAllPending = () => {
  return {
    type: "DELETE_ALL_PENDING"
  }
} 

export const deleteAllSuccess = (response) => {
  return {
    type: "DELETE_ALL_SUCCESS",
    response
  }
} 

export const deleteAllFailure = (error) => {
  return {
    type: "DELETE_ALL_FAILURE",
    error
  }
}

/*API CALL ACTIONS*/


//Get initial message
export const getIm = () => {
  return dispatch => {
    dispatch(getImPending());

    axios
      .get('/messages') 
            .then(res => {
              dispatch(getImSucess(res.data.data));   
            })
            .catch( err => {
                console.log("Im error:", err);
                dispatch(getImFailure(err));
            } 
            )
    
  }
}

export const postMessage = (newMsg) => {
  return dispatch => {
    dispatch(postMessagePending());

    axios
      .post('/add', newMsg)
      .then(res => {
        dispatch(postMessageSuccess(res.data.data, newMsg)); 
        dispatch(getIm());
      })
      .catch (err => {
        dispatch(postMessageFailure(err));
      })
  }
}

export const deleteAll = () => {
  return dispatch => {
    dispatch(deleteAllPending());

    axios
      .delete('/')
      .then (res => {
        dispatch(deleteAllSuccess(res.data));
      })
      .catch (err => {
        dispatch(deleteAllFailure(err));
      })
  }
}
