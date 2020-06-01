
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



