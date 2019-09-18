import React, { Component } from 'react';
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

class Timer extends Component {
  constructor(props){
    super(props)

    this.state = {
      time: props.start
    }

  }

  componentDidMount() {
    this.addInterval = setInterval( () => this.increase(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.addInterval);
  }

  increase() {
    this.setState((state, props) => ({
      time : parseInt(this.state.time) + 1
    }));
  }

  render() {
    return (
      <div>
        { this.state.time } Detik
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Greeting name="Test User" />
        <Timer start="0" />

      </header>
    </div>
  );
}

export default App;
