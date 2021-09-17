import React, { Component } from "react";
import './inputs.scss'

interface TextareaProps {
    textareaUpdate: any;
}

interface TextareaState {
    textValue: string; 
};

export default class Textarea extends Component<TextareaProps, TextareaState> {

    constructor(props: any){
        super(props);
        this.state = {
            textValue: '',
        }

        this.handleKeyUp = this.handleKeyUp.bind(this)

    }

    handleKeyUp = (event: any): string => {
        // event.preventDefault();
        this.setState({textValue : event.target.value});
        this.props.textareaUpdate(this.state.textValue);
        return this.state.textValue
    }

    render () {

        let {textValue} = this.state;

        return (
            <textarea 
            rows={10}
            value={textValue}
            className="input textarea"
            // onChange={(e) => setEnteredText(e.target.value)}
            onChange={this.handleKeyUp}
        >
            
        </textarea>
        );
    }
}