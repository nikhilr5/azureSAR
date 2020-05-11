import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import allReducers from './redux/reducers';
import { Provider } from 'react-redux';
import {useSelector} from 'react-redux'

const store = createStore(allReducers);
var root = document.getElementById('root');
var newBut = <div><button id='recordButton' onclick = 'test()'>test </button></div>;


var test = <p className = "name"> Testing please work lord</p>;

ReactDOM.render(
     <Provider store={store}>
          <App />
     </Provider>,
     // newBut,

     root,
     () => { console.log("We have just rendered the site");}
);
if (!test) {
ReactDOM.unmountComponentAtNode(root);

}



// AUTOMATIC COMMENT PROVIDED BY NPX:
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
