import React from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
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
    const value = useSelector(state => state.value);

    //callback function to dispatch the handleChange 'action' to our 'reducers'
    //todo: memoize with useCallback ??
    const handle_User = (e) => {
        dispatch(handleUser(e.target.name, e.target.value));
     }

    const handle_Msg = (e) => {
        dispatch(handleMsg(e.target.name, e.target.value));
    }

    const handle_Submit = () =>  {
        dispatch(handleSubmit(document.getElementById('name').value, document.getElementById('msg').value));
    }



     //TODO: implement handleSubmit
       //maybe replace submit button to general button component type
       //TODO: write separate handleChange function for message(CURRENTLY DISPLAYS THE SAME FOR BOTH USERNAME AND MESSAGE)
       // CHANGE TO HANDLE NAME AND HANDLE TEXT
       return(<form onSubmit= {handle_Submit}>
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
