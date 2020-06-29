//TODO EVERYTHING; template
import React, {Fragment, useState, useEffect} from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { getActiveMsg, getDelete, getIm } from '../actions';


export default function MsgList (){



    const dispatch = useDispatch();

    /* const [loading, setLoading] = useState(true);
    const [error, setError] = useState('')*/
    const [get, setGet] = useState({}); //data for initial messages 

    //fetching from API endpoint
    //empty dependency array ensures API is only called once
    //useEffect for side effect; same as componentdidmount
    useEffect(()=>{
        dispatch(getIm());
    
    }, []); 
    
    const listItems = useSelector(state => state.messages.messages); //first messages is im in messageReducer; .messages gives the array part of messages
    
    

    const getActiveMessageID = (i) => {
        dispatch(getActiveMsg(i));
    }

    const getDeleteId = (i) => {
        dispatch(getDelete(i));
    }
   

     //TODO: somehow load data into ims so the mapping starts
    let msgsToRender;
    

    console.log("listItems", listItems);

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
    //console.log("msgtoRender", msgsToRender);
    
    
     //TODO: SET UP CONDITIONS FOR LOADING, SUCCESS AND FAILURE TO DECIDE WHAT TO DISPLAY
    return( 
    
    <ul className= "msg_list"> 
            {msgsToRender}
    </ul> 
    );

}
