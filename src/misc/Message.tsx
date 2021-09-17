import React, { Component } from "react";
import './misc.scss'

interface MessageProps {
    showError: boolean;
}

interface MessageState {
    showError: boolean; 
};

class Message extends Component<MessageProps, MessageState> {

    constructor(props: MessageProps) {
        super(props)
        this.state = {
            showError: this.props.showError
        }
    }

    render () {

        let {showError} = this.state;

        if (showError){
            return (
                <p>Message goes here</p>
            );
        } else {
            return '';
        }
        
     }
}

export default Message