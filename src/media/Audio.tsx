import React from "react";
import './media.scss'

function AudioPlayer () {
    return (
        <audio 
            className="media audio"
            controls
        >   
            <source src="https://www.kozco.com/tech/piano2.wav"></source>
        </audio>
    )
}

export default AudioPlayer