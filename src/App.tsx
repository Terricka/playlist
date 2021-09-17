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
  disableButton: any,
  textValue: string,
  showPlayer: any;
  showError: boolean;
};


class App extends Component<any, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      disableButton: true,
      textValue: '',
      showPlayer: false,
      showError: false
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

  handleSubmitClick = () => {
    console.log(this.state)

    setTimeout(() => {
      this.setState({showPlayer : true})
    }, 1500)
  }

  render () {

    let {disableButton, textValue, showPlayer, showError} = this.state;

    return (
      <div className="App">
        <Header />
        <Textarea 
          textareaUpdate = {this.handleTextareaUpdate} 
        />
        <Button 
          key={disableButton}
          disableButton={disableButton} 
          textValue={textValue} 
          submitClicked = {this.handleSubmitClick} 
        />
        <Message 
          showError={showError}
        />
        <AudioPlayer
          key={showPlayer}
          showPlayer={showPlayer}
        />
      </div>
    )
  }
}

export default App;
