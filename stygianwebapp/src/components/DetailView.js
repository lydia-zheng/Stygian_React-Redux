import React from 'react';
//import ReactDOM from 'react-dom';
//import MsgList from './MsgList';
import { useSelector } from 'react-redux';
//import useModal from './useModal';

//citing:https://upmostly.com/tutorials/modal-components-react-custom-hooks
//A stateless functional component that takes two props and only returns HTML when isShowing is true.
// Portals allow React components to render in another part of the DOM that is outside of their parent component.
//we can use a Portal to mount our Modal component to the end of the document.body element


// **modal component doesn’t actually handle it’s own state.** It's parent does

//2 arguments for the createPortal function: 
        //1)the modal component we want to render 
        //2)the location of where we want to append the component.



export default function DetailView (){
    //const hide = useModal.hide;

    const activeMsgID = useSelector(state => state.id);
    const msgList = useSelector(state =>state.messages.messages);
    let name = "N/A";
    let content  = "N/A";
    let date = "N/A";
    
    //console.log("activeMsgID:", activeMsgID);
    
    
    if (activeMsgID || activeMsgID === 0){
        //console.log("insideActiveMsg");
        
        name = msgList[activeMsgID].name;
        content = msgList[activeMsgID].content;
        date = msgList[activeMsgID].date;
    }

    return (
        
        <div id= "detailedView" className='popup'>
            <div className="popup_inner">
                <h1>Detailed View </h1>
            <p>message index is: {activeMsgID} <br/><br/>
            username: {name}<br/><br/>
            content: {content}<br/><br/>
            date: {date} <br/><br/>
            </p>
            
            </div>
            

        </div>   
    );
}



    
