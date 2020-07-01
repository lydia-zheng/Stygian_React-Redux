import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'; //connect used in old version
import { handleUser, handleMsg, postMessage} from '../actions';


export default function UserForm () {
    //useDispatch is a function from react-redux that returns the function to dispatch 'actions' to 'reducers'
    //works similarily to mapDispatchToProps
    const dispatch = useDispatch();

    //useSelector is a function from react-redux that returns the part of the global state you want (or the gobal state but this should never be done)
    //remember global state struction structure currently looks like this:
    //state: {
    //  value    
    //} 
    const value = useSelector(state => state.value);

    const [newName, setNewName] = useState ();
    const [newC, setNewC] = useState ();
    const [newD, setNewD] = useState ();



    //callback function to dispatch the handleChange 'action' to our 'reducers'
    //todo: memoize with useCallback ??
    const handle_User = (e) => {
        setNewName(e.target.value); //sets the new filled out states for newMsg to be added
        dispatch(handleUser(e.target.name, e.target.value));
     }

    const handle_Msg = (e) => {
        setNewC(e.target.value); //sets the new filled out states for newMsg to be added
        const timestamp = Math.floor (Date.now() /1000); //converts to unix timestamp
        
        //read the value in render function; after react updated DOM
        setNewD(timestamp);
        console.log("date inside handleMsg:", timestamp);
        dispatch(handleMsg(e.target.name, e.target.value));
        
    }

    
    //TODO: implement handleSubmit AND CONNECT WITH ACTION AND SUCH; 
    //REMEMBER TO PREVENT DEFAULT
    const handle_Submit = (e) =>  {
        
        //function: added new Msg
        e.preventDefault();

        //empty default state (undefined) msg
        const addedMsg = {
            name: newName,
            content: newC,
            date: newD
        }
        

       
        if (addedMsg.name && addedMsg.content && addedMsg.date){
            console.log("inside adding new message!", addedMsg)
            dispatch(postMessage(addedMsg)); //api call
            
           

            setNewC(''); //clear the fields so new message can be written
            setNewD(null); //clear the fields so new date can be added
        
        //dispatch(handleSubmit(addedMsg)); //old implementation

    
        } 
        
            
       
        
    }
     
       //maybe replace submit button to general button component type
       

       return(<form onSubmit= {(e) => handle_Submit(e)}>
        <label>
            Username:
            <input id ="name" type="text" value={value} onChange={(e) => handle_User(e)}/>
        </label>
        <label>
            Enter Your Message:
            <input id="msg" type="text" value={value} onChange={(e) => handle_Msg(e)}/>
        </label>
            <input type="submit" value="Submit"></input> 
    </form>
       );

}
