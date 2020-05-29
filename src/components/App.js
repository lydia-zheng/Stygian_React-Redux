import React /*, {useState} */ from 'react';
import UserForm from './UserForm';
import MsgList from './MsgList';
import '../App.css';
import DetailView from './DetailView';
import useModal from './useModal';


const App = () => {   //this is how you make a functional component
    const {isShowing, toggle} = useModal();

    return (
    <div className= "body" > 
      <header>Stygian Home</header>
      <section className="container">
        <div id="all_messages">
          <MsgList />
          <button className="detail_button" onClick={() => toggle()}>Show Details</button>   
        </div>
        <div id="form">
        {isShowing ? 
        <div>
           <button id ="close_button" onClick={() => toggle()}>X</button>
          <DetailView />
        </div>
        
        : null
        }
        <UserForm/>
      </div>

      </section>
      
      
      

      </div>
    );
  }
//TODO: add list to the all_messages part; add addition div for details and extra thing

export default App;
