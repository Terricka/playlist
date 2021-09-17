import React, { Component } from "react";
import './media.scss'

class AudioPlayer extends Component {

    render () {
        return (
            <audio 
            className="media audio"
            controls
        >   
            <source src="https://www.kozco.com/tech/piano2.wav"></source>
        </audio>
        )
     }

}

export default AudioPlayer