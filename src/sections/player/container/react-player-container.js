import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import ReactPlayerComponent from '../components/react-player-component';


class ReactPlayerContainer extends Component {
  render() {
    // const { url,muted,size,playing,repeat } = this.props
    return <ReactPlayerComponent {...this.props} />;
  }
}


export default ReactPlayerContainer
