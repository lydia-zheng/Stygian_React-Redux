import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import  { createStore, applyMiddleware } from 'redux';
import reducers from './reducers'; //we exported combineReducers
import thunk from 'redux-thunk';


//use applyMiddleware to add thunk middleware to the store

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>, 
  document.getElementById('root')
  );
  
  //links view(React) to Redux side

