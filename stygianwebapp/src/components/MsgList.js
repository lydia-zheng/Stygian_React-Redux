//TODO EVERYTHING; template
import React, {Fragment, useEffect} from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { getActiveMsg, getDelete, getIm} from '../actions';


export default function MsgList (){



    const dispatch = useDispatch();

    //fetching from API endpoint
    //empty dependency array ensures API is only called once
    //useEffect for side effect; same as componentdidmount
    useEffect(()=>{
        dispatch(getIm());
    
    }, []); 
    
    const listItems = useSelector(state => state.messages.messages); //first messages is the messageReducer; .messages gives the array part of messages
    const stateOfRequest = useSelector(state => state.messages.requestStatus);
    

    const getActiveMessageID = (i) => {
        dispatch(getActiveMsg(i));
    }

    const getDeleteId = (i) => {
        dispatch(getDelete(i));
    }
   

     //TODO: somehow load data into ims so the mapping starts
    let msgsToRender =
    
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
    
   
    
    
     //TODO: SET UP CONDITIONS FOR LOADING, SUCCESS AND FAILURE TO DECIDE WHAT TO DISPLAY
    return( 
    //loads messages if state is not pending/loading
    //might need to test/debug failure condition
    <ul className= "msg_list"> 
            {stateOfRequest.isPending ? "Loading" :  msgsToRender}
            {stateOfRequest.isFailure ? <div>Error! {stateOfRequest.error.message}</div> : null }
    </ul> 
    );

}
