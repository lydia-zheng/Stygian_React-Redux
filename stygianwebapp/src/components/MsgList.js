//TODO EVERYTHING; template
import React, {Fragment, useEffect, setTimeOut, useState} from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { getActiveMsg, getDelete, getIm} from '../actions';
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

export default function MsgList (){



    const dispatch = useDispatch();
    const [displayMessage, setDisplayMessage] = useState(false);

    //fetching from API endpoint
    //empty dependency array ensures API is only called once
    //useEffect for side effect; same as componentdidmount
    useEffect(()=>{

        //TODO: maybe do setTimer here to delay message load to show off spinner? Or potentially do it in Backend Fetch
        dispatch(getIm());
    
    }, []); 

    useEffect(()=>{
        console.log(displayMessage);
        const timeout = setTimeout(enableMessage(),10000);//10 seconds;; TODO: not working: currently doesn't wait to set displayMessage to true        
        return () => clearTimeout(timeout); //debug?
    }, []); 
   


    const enableMessage = () => {
        console.log(displayMessage);
        setDisplayMessage(true); //toggle boolean to cause delay for message; avoid loading flicker: currently not working
    }
    

    console.log(displayMessage);

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
           
            {stateOfRequest.isPending & displayMessage
            
            ? 
         
             //'loading'
            //if case:  show loader
              <div> 
              <Loader 
              type ="BallTriangle"
              color= "#00BFFF"
              height={100}
              width={100}
              timeout = {10000} //timeout after 10 seconds
            />
            </div> 
            : 

            msgsToRender    
            
            }
            {stateOfRequest.isFailure ? <div>Error! {stateOfRequest.error.message}</div> : null }
    </ul> 
    );

}
