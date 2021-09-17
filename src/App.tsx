import React, { Component } from 'react';
import './App.css';
import Header from './headers/Header';
import Textarea from './inputs/Textarea';
import Button from './inputs/Button';
import AudioPlayer from './media/Audio';
import Message from './misc/Message';

class App extends Component {
  render () {
    return (
      <div className="App">
        <Header />
        <Textarea />
        <Button />
        <Message />
        <AudioPlayer />
      </div>
    )
  }
}

export default App;
