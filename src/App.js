import React from 'react';
import logo from './logo.svg';
import './App.css';


function DisplayAge(props) {
  return <p>{props.age} years old</p>
}


function Greeting(props) {
  return <p>Hello {props.name} From Greeting, You Are
    <DisplayAge age="25"/>
  </p>;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Greeting name="Test User"/>

      </header>
    </div>
  );
}

export default App;
