import React from 'react';
import logo from './logo.svg';
import './App.css';

// the only thing added to default create-react-app
import WebSocketAsPromised from 'websocket-as-promised';
new WebSocketAsPromised('ws://localhost:8080');
// run with yarn build, then http-server ./build

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
