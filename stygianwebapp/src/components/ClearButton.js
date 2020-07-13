import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'; //connect used in old version
import {deleteAll} from '../actions';


export default function UserForm () {
    const dispatch = useDispatch();


    //callback for handling clearing 
    const handle_Button = (e) => {
            dispatch(deleteAll()); //TODO: action name in here and setting up action & reducer
    }

    return (
        <button id = "clear" onClick = {(e) => handle_Button(e)}>
            CLEAR ALL.
        </button>
    );
}