//TODO EVERYTHING; template
import React, { Component, Fragment, useState } from 'react';
import {useSelector, useDispatch } from 'react-redux';
import {initializeName, initializeMsg} from "../actions"

export default function MsgList (){
    //state: {
    //     
    //}
    const dispatch = useDispatch();
   
    /*
    useState should be used only inside functional components. useState is the way if we need an internal state and don't need to implement more complex logic such as lifecycle methods.

    const [state, setState] = useState(initialState);
    Returns a stateful value, and a function to update it.

    During the initial render, the returned state (state) is the same as the value passed as the first argument (initialState).

    The setState function is used to update the state. It accepts a new state value and enqueues a re-render of the component.
     */
    
    const listItems = useSelector(state => state.messages.messages); //first messages is im in messageReducer; .messages gives the array part of messages
    

     /*cite: https://www.debuggr.io/react-map-of-undefined/ 
     undefined or null values are ignored inside JSX so it's safe to pass it on for first render
     */

     //TODO: somehow load data into ims so the mapping starts
    let msgsToRender;
    //if (ims) {
        msgsToRender =
         listItems.map((msg, i) => {
            return (
                <Fragment key= {i}>
                    {
                            <li className="msg_send">
                            <div className="msg">
                            <div className ="msg_content">
                    <div className="msg_username">{msg.name}</div>
                    <div className="msg_message">{msg.content}</div>
                            </div>
                            </div>
                        </li>   
                    }
                </Fragment>
            )
        })
    /* } else {
        msgsToRender = "Loading..."; //TODO: FIX CURRENTLY ALWAYS UNDEFINED
    } */


     //TODO: get action to populate ul with lis
     
    return( 
    
    <ul className= "msg_list"> 
            {msgsToRender}
    </ul> 
    );

}
