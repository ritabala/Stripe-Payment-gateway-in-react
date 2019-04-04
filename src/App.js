import React, { Component } from 'react';
import './App.css';
import Checkout from './Component/Checkout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Checkout name={'Rita'}
                   description={'transfer 20$'}
                   amount = {2000}/>
      </div>
    );
  }
}

export default App;
