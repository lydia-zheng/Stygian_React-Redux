import React from 'react';
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

    //callback function to dispatch the handleChange 'action' to our 'reducers'
    //todo: memoize with useCallback ??
    const handle_User = (e) => {
        dispatch(handleUser(e.target.name, e.target.value));
     }

    const handle_Msg = (e) => {
        dispatch(handleMsg(e.target.name, e.target.value));
    }

    //test if this works or if the fields are needed
    //TODO: implement handleSubmit AND CONNECT WITH ACTION AND SUCH; 
    //REMEMBER TO PREVENT DEFAULT
    const handle_Submit = (e) =>  {
        e.preventDefault();
        //uncomment
        //dispatch(handleSubmit(document.getElementById('name').value, document.getElementById('msg').value));
    }



     
       //maybe replace submit button to general button component type
       
       // CHANGE TO HANDLE NAME AND HANDLE TEXT
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
