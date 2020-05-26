
export const handleChange = (value) => {
  return {
    type: "HANDLE_CHANGE",
    //add could be called payload or anything used in action
    input: value
  };
}

