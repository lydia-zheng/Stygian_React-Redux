import React from 'react';
import UserForm from './UserForm';
import MsgList from './MsgList';

const App = () => {   //this is how you make a functional component
	return (
<div className = "container"> 
  <header>Stygian Home</header>
  <div id="all_messages"></div>
  
  <div id="form">
    <UserForm/>
    {/* <SubmitButton/> */}
  </div>

  </div>
);
}
//TODO: add list to the all_messages part; add addition div for details and extra thing

export default App;
