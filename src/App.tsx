import React from 'react';
import './App.css';
import Header from './headers/Header';
import Textarea from './inputs/Textarea';
import Button from './inputs/Button';
import AudioPlayer from './media/Audio';
import Message from './misc/Message';

function App() {
  return (
    <div className="App">
      <Header />
      <Textarea />
      <Button />
      <Message />
      <AudioPlayer />


      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
