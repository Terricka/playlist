import React, { Component } from "react";
import './inputs.scss';

interface ButtonProps {
    disableButton: any;
    textValue: string;
}

interface ButtonState {
    label: string, 
    disabled: boolean
};

export default class Button extends Component<ButtonProps, ButtonState> {
    

    constructor(props: any) {
        super(props);
        this.state = {
            label: 'Submit',
            disabled: this.props.disableButton,
        }  

        console.log(this.state)

        if (this.props.textValue.length > 0){
            this.setState({disabled: false})
        } else {
            this.setState({disabled: true})
        }
        
        
    }

    render () {
        let {disabled, label} = this.state

        return (
            <div className="submit-button-container">
             <button key={this.props.disableButton} disabled={disabled}>
                {label}
            </button>
        </div>  
        )
    }
}
