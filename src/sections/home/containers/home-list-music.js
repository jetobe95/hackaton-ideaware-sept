import React, { Component } from 'react';
import HomeLayoutListMusic from '../components/home-layout-list-music';
import SongDetailComponent from '../../widgets/song-details-component';
import _ from 'lodash';
import { playSong } from '../../../redux/actions/actions';
import { connect } from 'react-redux';

class HomeListMusicContainer extends Component {
  render() {
    const {
      Player: { songs },
      playSong
    } = this.props;
    const SONGS = _.map(songs, song => {
      // console.log(song)
      // return
      return (
        <SongDetailComponent
          playSong={() => playSong(song)}
          name={song.snippet.title}
          key={song.id.videoId}
          videoId={song.id.videoId}
          artist={song.channelTitle}
          tubnail={song.snippet.thumbnails.default.url}
        />
      );
    });
    return <HomeLayoutListMusic>{SONGS}</HomeLayoutListMusic>;
  }
}

const MapStateToProps = ({ Player }) => {
  return {
    Player
  };
};
const MapDispatchToProps = dispatch => {
  return {
    playSong: song => dispatch(playSong(song))
  };
};

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(HomeListMusicContainer);
