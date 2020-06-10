import React, {useState} from 'react';
import {useSelector, useDispatch } from 'react-redux'; //connect used in old version
import { handleUser, handleMsg, handleSubmit } from '../actions';


export default function UserForm () {
    //useDispatch is a function from react-redux that returns the function to dispatch 'actions' to 'reducers'
    //works similarily to mapDispatchToProps
    const dispatch = useDispatch();

    //useSelector is a function from react-redux that returns the part of the global state you want (or the gobal state but this should never be done)
    //remember global state struction structure currently looks like this:
    //state: {
    //  value    
    //}
    //TODO: state.value figure out
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
        const timestamp = Date.now(); // This would be the timestamp you want to format

            
        setNewD( new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp)); 
        //setting the proper timestamp; fixed doesn't allow identical messages to have different timestamp
        console.log(addedMsg.date);
        
        if (addedMsg.name && addedMsg.content){
            

            dispatch(handleSubmit(addedMsg));

            //setNewName(""); //clear out past input
           // setNewC(""); //clear out past input by reseting with new state
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
