import React from 'react';
import { Direction, Slider } from 'react-player-controls';
const WHITE_SMOKE = '#eee';
const GRAY = '#878c88';
const GREEN = '#72d687';
const SliderBar = ({ direction, value, style }) => (
  <div
    style={Object.assign(
      {},
      {
        position: 'absolute',
        background: GRAY,
        borderRadius: 4
      },
      direction === Direction.HORIZONTAL
        ? {
            top: 0,
            bottom: 0,
            left: 0,
            width: `${value * 100}%`
          }
        : {
            right: 0,
            bottom: 0,
            left: 0,
            height: `${value * 100}%`
          },
      style
    )}
  />
);

const SliderHandle = ({ direction, value, style }) => (
    <div
      style={Object.assign({}, {
        position: 'absolute',
        width: 16,
        height: 16,
        background: GREEN,
        borderRadius: '100%',
        transform: 'scale(1)',
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'scale(1.3)',
        }
      }, direction === Direction.HORIZONTAL ? {
        top: 0,
        left: `${value * 100}%`,
        marginTop: -4,
        marginLeft: -8,
      } : {
        left: 0,
        bottom: `${value * 100}%`,
        marginBottom: -8,
        marginLeft: -4,
      }, style)}
    />
  )
  const ProgressBar = ({ isEnabled, direction, value, style,...props }) => (
    <Slider
      isEnabled={isEnabled}
      direction={direction}
    //   onChange={/* store value somehow */}
      style={{
        width: direction === Direction.HORIZONTAL ? 200 : 8,
        height: direction === Direction.HORIZONTAL ? 8 : 130,
        borderRadius: 4,
        background: WHITE_SMOKE,
        transition: direction === Direction.HORIZONTAL ? 'width 0.1s' : 'height 0.1s',
        cursor: isEnabled === true ? 'pointer' : 'default',...style
      }}
      {...props}
    >
      <SliderBar direction={direction} value={value} style={{ background: isEnabled ? GREEN : GRAY }} />
      <SliderHandle direction={direction} value={value} style={{ background: isEnabled ? GREEN : GRAY }} />
    </Slider>
  )
const ProgressBarPlayer = ({currentTime,value,currentSong,style}) => {
  return (
    <ProgressBar
    style={style}
    
    isEnabled
    direction={Direction.HORIZONTAL}
    value={currentTime / currentSong.duration}
    // onChange={value => seek(value * currentSong.duration)}
  />
  )
};

export default ProgressBarPlayer;
