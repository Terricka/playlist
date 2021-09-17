import React, { Component } from "react";
import './media.scss'

interface AudioPlayerProps {
    showPlayer: boolean;
}

interface AudioPlayerState {
    showPlayer: boolean; 
};


class AudioPlayer extends Component<AudioPlayerProps, AudioPlayerState> {

    constructor(props: AudioPlayerProps) {
        super(props)
        this.state = {
            showPlayer: this.props.showPlayer
        }
    }

    render () {
        let {showPlayer} = this.state;

        if (showPlayer) {
            return (
                <audio 
                className="media audio"
                controls
            >   
                <source src="https://www.kozco.com/tech/piano2.wav"></source>
            </audio>
            )
        } else {
            return ''
        }
       
     }

}

export default AudioPlayer