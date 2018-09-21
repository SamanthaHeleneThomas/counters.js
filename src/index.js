import React from 'react';
// importing react allows us to use the JSX syntax that babel will later transform into React.createElement calls
import ReactDOM from 'react-dom';
//ReactDOM library allows us to mount our react application inside of a browser
//
import './index.css';
//loads the main CSS file at the highest point in the application
//
import App from './App';
//app is a react component we need to mount react components at the top level
import registerServiceWorker from './registerServiceWorker';
// imports service worker at the top for production caching

ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render takes in two parameters, the component to mount and the second is the element in the Dom to mount to 

registerServiceWorker();
//register the service worker to the browser