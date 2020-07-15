import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'; //connect used in old version
import {deleteAll} from '../actions';


export default function UserForm () {
    const dispatch = useDispatch();


    //callback for handling clearing 
    const handle_Button = (e) => {
            dispatch(deleteAll()); 
    }

    return (
        <button id = "clear" onClick = {(e) => handle_Button(e)}>
            CLEAR ALL.
        </button>
    );
}