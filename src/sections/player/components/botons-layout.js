import React from 'react';

const BottonsLayout = ({ handleplaySong,playing, random = false, repeat }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'space-between',
        color: 'white',
        height: 50,
        width: '50%',
        justifyContent:'space-around',
        alignItems:'center'

      }}
    >{
      random?
      <i className="fas fa-random" style={{ color: 'white' }} />
      :
      <i className="fas fa-random" style={{ color: 'grey' }} /> 
    }
      
      
      <i className="fas fa-step-backward" />
      {playing ? <i 
      onClick={()=>handleplaySong()}
       className="fas fa-play" /> : <i
       onClick={()=>handleplaySong()}
        className="fas fa-pause" />}
      {repeat ? (
        <i class="fas fa-retweet" style={{ color: 'white' }} />
      ) : (
        <i class="fas fa-retweet" style={{ color: 'grey' }} />
      )}
      <i className="fas fa-fast-forward" />
    </div>
  );
};

export default BottonsLayout;
