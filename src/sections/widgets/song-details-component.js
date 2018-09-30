import React from 'react';
import './song-details-component.css';
import logo from './logo.svg';
import microphone from '../../fotos/microphone.png';
const size = 40;
const SongDetailComponent = ({
  url,
  playing,
  
  tubnail,
  favorite,
  name,
  artist,
  lyric = true,
  duration,
  handleFavorite,
  videoId,
  playSong
}) => {
  return (
    <div className="song-detail-container"
    onClick={()=>playSong()}
    >
      <img
        style={{ alignContent: 'flex-start' }}
        height={37}
        width={55}
        src={tubnail || logo}
        alt={name}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: 40,
          height: 40,
          flex: 0.05
        }}
      >
        <i
          onClick={() => handleFavorite()}
          className={`${favorite ? 'fas fa-heart' : 'far fa-heart'}`}
          style={{ color: 'white' }}
        />
        <div className="dropdown">
          <i
            className="fas fa-ellipsis-v dropbtn"
            style={{ color: 'white', opacity: 0.5 }}
          />
          <div className="dropdown-content">
            <a href="#">Add to My Songs</a>
            <a href="#">Add to queue</a>
            <a id='options' href="#">Add to playlist</a>
            <a href="#">Share Song</a>
          </div>
        </div>
      </div>
      <p className="artist-text" style={{ textAlign: 'left' }}>
        {name}
      </p>
      <p className="artist-text">{artist}</p>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: 70
        }}
      >
        {lyric && <img height={17} width={17} src={microphone} alt={name} />}
        <p className="artist-text">{duration||'00:00'}</p>
      </div>
    </div>
  );
};
export default SongDetailComponent;
