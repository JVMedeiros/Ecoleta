import React, { useState } from 'react';

//Styles
import './App.css';

//Components
import Header from './Header';

function App() {
  const [counter, setCounter] = useState(0);

  function handleButtonClick() {
    setCounter(counter +1); 
  }

  return (
    <div>
      <Header title="Ecoleta" />
      <h1>{counter}</h1>
      <button type="button" onClick={handleButtonClick}>Acrescentar</button>
    </div>
  );
}

export default App;
