import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import JSX from './components/demo/jsx.js';
import Props from './components/demo/props.js';
import StateDemo from './components/demo/state.js';
import LifeCycle from './components/demo/life-cycle.js';
import Form from './components/demo/form.js';

class App extends Component {
  render() {
    const personObj = {name:'Vokowfoi',number:18923467237}
    return (
      <div className="App">
        <JSX></JSX>
        <hr/>
        <Props personObj={personObj} enjoy ={['basetball', 'football','pinpang']}></Props>
        <hr/>
        <StateDemo></StateDemo>
        <LifeCycle></LifeCycle>
        <hr/>
        <Form></Form>
      </div>
    );
  }
}

export default App;
