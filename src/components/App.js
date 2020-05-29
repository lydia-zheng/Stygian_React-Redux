import React from 'react';
import UserForm from './UserForm';
import MsgList from './MsgList';
import '../App.css';
import DetailView from './DetailView';


const App = () => {   //this is how you make a functional component
 
  return (
  <div className= "body" > 
    <header>Stygian Home</header>
    <section className="container">
      <div id="all_messages">
        <MsgList />
        
        {/* <button className="button-default" onClick={toggle}>Show Modal</button>
      <DetailView
        isShowing={isShowing}
        hide={toggle}
        /> */}
        
      </div>

      <div id="form">
      <DetailView/>
      <UserForm/>
    </div>

    </section>
    
    
    

    </div>
  );
  }
//TODO: add list to the all_messages part; add addition div for details and extra thing

export default App;
