import React, { Component, MouseEventHandler } from "react";
import './inputs.scss';

interface ButtonProps {
    disableButton: any;
    textValue: string;
    submitClicked: any;
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
        
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick = (event: React.MouseEvent) => {
        console.log(event)
        this.props.submitClicked();
    }

    render () {
        let {disabled, label} = this.state

        return (
            <div className="submit-button-container">
             <button 
                disabled={disabled}
                className={disabled ? 'disabled' : 'enabled'}
                onClick={this.handleClick}
             >
                {label}
            </button>
        </div>  
        )
    }
}
