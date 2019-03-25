// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import Teste from './test';

// Create a react component
const App = () => {
  const buttonText = { text: 'Click me' }; 
  const labelText = 'Enter name:';
  const style = { backgroundColor:'blue', color:'white' };

  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text"/>
      <button style={ style }>
        { buttonText.text } 
      </button>
    </div>
  );
};

//Take the reatc component and show it on the screen
ReactDOM.render(
  <Teste />,  //the component
  document.querySelector('#root') //index.html has this <div>
);