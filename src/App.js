import React, { Component } from 'react';
import PlayerInfo from './components/player/player.component';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  adds(a,b) {
    return a+b;
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Tic-Tac-Chat!</h1>
        </header>
        <PlayerInfo/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
