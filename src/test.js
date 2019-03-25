// Import the React and ReactDOM libraries
import React from 'react';

// Create a react component
const Teste = () => {
  const getTime = () => {
    return (new Date()).toLocaleTimeString()
  }

  return (
    <div>
        <div>Current Time:</div>
        <h3>{ getTime() }</h3>
    </div>
  );
};

export default Teste;