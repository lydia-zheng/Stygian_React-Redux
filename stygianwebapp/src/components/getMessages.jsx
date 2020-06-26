//Stand along functional helper method that just fetches api data
//get request for initial messages

import React, { useState, useEffect } from 'react';
import {useDispatch } from 'react-redux';
import { getImPending, getImSucess, getImFailure } from '../actions';

/* const getMessages = (url) => {
    //**TODO: STUB RN: should fetch request from backend?**
 
  //useEffect -> tells react that component does something after render
  useEffect(getData(url), []);
  return null;
};

async function getData(url){
  //let url = 'http://localhost:9000/messages';
  const [name, setName] = useState();
  const res = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    
    }
  }).then(
    //something here
  )
  return res.json(); //parse JSON response into native JS objects 
}*/




export default function getMessages () {
  return dispatch => {
    
    dispatch(getImPending()); //calls action for pending
    return fetch('http://localhost:9000/messages')
    .then((response) =>{
      //Handle HTTP errors since fetch doesn't
      if(!response.ok){
        throw Error(response.statusText);
      }
      return response;
    })
    .then(res =>res.json())
    .then(json => {
      dispatch(getImSucess(json.messages)); //action for sucess
      return json.messages; //returns the im
    })
    .catch(err => dispatch(getImFailure(err))); //action for failure
  }
}



