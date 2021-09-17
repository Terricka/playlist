import React, { Component } from "react";
import './media.scss'

interface AudioPlayerProps {
    showPlayer: boolean;
    audioUrl: string;
}

interface AudioPlayerState {
    showPlayer: boolean;
    audioUrl: string; 
};


class AudioPlayer extends Component<AudioPlayerProps, AudioPlayerState> {

    constructor(props: AudioPlayerProps) {
        super(props)
        this.state = {
            showPlayer: this.props.showPlayer,
            audioUrl: this.props.audioUrl
        }
    }

    handleCopyClick = () => {
        navigator.clipboard.writeText(this.state.audioUrl);   
    }


    render () {
        let {showPlayer, audioUrl} = this.state;

        if (showPlayer) {
            return (
                <div className="audio-container">
                    <audio 
                        className="media audio"
                        controls
                        >   
                        <source src={audioUrl}></source>
                    </audio>
                    <button 
                        onClick={this.handleCopyClick}
                    >
                        Copy URL
                    </button>
                </div>
            )
        } else {
            return ''
        }
       
     }

}

export default AudioPlayer