import React, { Component } from 'react';
import './player.css';
import { Media, Player, controls } from 'react-media-player';
import logo from '../widgets/logo.svg';
import ReactPlayer from 'react-player';
import ReactPlayerComponent from './components/react-player-component';
import BottonsLayout from './components/botons-layout';
import ProgressBarPlayer from './components/progress-bar-player';
import _ from 'lodash';
import { connect } from 'react-redux';
import { playSong, handleplaySong } from '../../redux/actions/actions';
const { PlayPause, MuteUnmute } = controls;
class AudioPlayer extends Component {
  state = {
    progress: 0,
    duration:0
  }



  handleProgress=({played,playedSeconds,loadedSeconds,loaded})=>{
    this.setState(prev=>{
      return {
        progress:playedSeconds
      }
    })
  }
  render() {
    // console.log(this.props, 'Props');

    const {
      url1,
      muted,
      handleplaySong,
      Player: {
        repeat,
        playing,
        volume,
        random,
        ...Player,
      }

      // Player: {
      //   repeat,
      //   playing,
      //   volume,
      //   random,
      //   currentSong: {
      //     id: { videoId },
      //     snippet: { title: name, channelTitle: artist }
      //   }
      // }
    } = this.props;

    const videoId = _.get(Player, 'currentSong.id.videoId')
    const name = _.get(Player, 'currentSong.snippet.title')
    const artist = _.get(Player, 'currentSong.snippet.channelTitle');
    const url = 'https://www.youtube.com/watch?v=pNzhLB6vSGQ';

    return (
      <div
        className="player"
        style={{
          position: 'fixed',
          backgroundColor: '#252525',
          zIndex: 2,
          bottom: 0,
          width: '100%'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row'
          }}
        >
          <ReactPlayerComponent
            volume={volume}
            style={{ marginLeft: 2 }}
            repeat={repeat}
            size={100}
            videoId={videoId}
            muted={muted}
            playing={playing}
            onProgress={this.handleProgress}
            onDuration={duration=>this.setState({duration})}

          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <p
              style={{
                color: 'grey',
                marginLeft: 10
              }}
            >
              {artist}
            </p>
            <h4 className="player-name-artist">{name}</h4>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              flex: 1,
              height: 100,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <BottonsLayout
                handleplaySong={handleplaySong}
                playing={!(playing)} random={random} repeat={repeat} />
              <ProgressBarPlayer 
              currentTime={this.state.progress}
              currentSong={{ duration: this.state.duration, }} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const MapStateToProps = ({ Player }) => {
  return {
    Player
  };
};
const MapDispatchToProps = dispatch => {
  return {
    playSong: song => dispatch(playSong(song)),
    handleplaySong: () => dispatch(handleplaySong()),
  };
};

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(AudioPlayer);
