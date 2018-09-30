import React, { Component } from 'react';
import './player.css';
import { Media, Player, controls } from 'react-media-player';
const { PlayPause, MuteUnmute } = controls;
export default class AudioPlayer extends Component {
  render() {
    return (
      <Media>
        <div className="media">
          <div className="media-player">
            <Player 
            autoPlay
            
            style={{height:2}}
            src="https://www.youtube.com/watch?v=285onbnzCV0" />
          </div>
          <div className="media-controls">
            <PlayPause />
            <MuteUnmute />
          </div>
        </div>
      </Media>
    );
  }
}
