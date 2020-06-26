//TODO EVERYTHING; template
import React, {Fragment, useEffect} from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { getActiveMsg, getDelete } from '../actions';
import getMessages from './getMessages';

export default function MsgList (){


    const dispatch = useDispatch();
   
    
    
    
    //same as ComponentDidMount; runs after component is rendered to DOM;
    //good place for API call using helper function getMessages
    useEffect(getMessages(), []);

    const listItems = useSelector(state => state.messages.messages); //first messages is im in messageReducer; .messages gives the array part of messages
    
    

    const getActiveMessageID = (i) => {
        dispatch(getActiveMsg(i));
    }

    const getDeleteId = (i) => {
        dispatch(getDelete(i));
    }
   

     //TODO: somehow load data into ims so the mapping starts
    let msgsToRender;
    if (listItems) {
        msgsToRender =
        
         listItems.map((msg, i) => {
         //iterate  and get the hook's default isShowing and toggle for each message
            
            return (
                <Fragment key= {i}>
                    {
                            <li className="msg_send" onClick = {() =>getActiveMessageID(i)}>
                            <div className="msg">
                            <div className ="msg_content">
                                <button onClick= {()=>getDeleteId(i)}>X</button>
                    <div className="msg_username">{msg.name}</div>
                    <div className="msg_message">{msg.content}</div>
                    {/* <div className="msg_date">{msg.date}</div> */}
                            </div>
                            </div>
                        </li>   
                    }
                </Fragment>
            )
        })
    }else {
        msgsToRender = "Loading..."; 
    } 
     
    return( 
    
    <ul className= "msg_list"> 
            {msgsToRender}
    </ul> 
    );

}
