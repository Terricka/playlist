import React, { Component } from 'react';
import './App.css';
import Header from './headers/Header';
import Textarea from './inputs/Textarea';
import Button from './inputs/Button';
import AudioPlayer from './media/Audio';
import Message from './misc/Message';

interface Props {
  // disableButton: boolean;
}

interface State {
  disableButton: boolean,
  textValue: string
};


class App extends Component<any, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      disableButton: true,
      textValue: '',
    }
  }

  handleTextareaUpdate = (data: any) => {
    this.setState({textValue: data});
    if (this.state.textValue.length > 0) {
      this.setState({disableButton: false})
    } else {
      this.setState({disableButton: true})
    }
  }

  render () {

    let {disableButton, textValue} = this.state;

    return (
      <div className="App">
        <Header />
        <Textarea textareaUpdate = {this.handleTextareaUpdate} />
        <Button 
          disableButton={disableButton} 
          textValue={textValue} 
        />
        <Message />
        <AudioPlayer />
      </div>
    )
  }
}

export default App;
