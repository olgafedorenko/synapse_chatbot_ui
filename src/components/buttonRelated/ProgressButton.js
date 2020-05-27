import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import Color from 'color';
import hexToRgba from 'hex-to-rgba';
import injectSheet from 'react-jss';


const styles = {
  bar1Buffer: (props) => {
    let color = props.buttonColor ? `#${props.buttonColor}` : '#080808';
    if (color === '#000000') color = '#080808';
    return { 
      backgroundColor: [color, '!important'],
      borderRadius: `${props.fullWidth ? null : '6px'}`
    };
  },
  bar2Buffer: (props) => {
    let color = props.buttonColor ? `#${props.buttonColor}` : '#080808';
    let lightenFactor = 0.3;
    if (color === '#000000') {
      color = '#080808';
      lightenFactor = 6;
    }
    return { 
      backgroundColor: [Color(color).lighten(lightenFactor).hex(), '!important'],
      borderRadius: `${props.fullWidth ? null : '6px'}`
    };
  }
};

const ProgressButton = props => {
  const {
    id,
    buttonColor,
    width,
    fullWidth
  } = props;

  const roundedStyleBtn = {
    height: '3rem',
    bottom: 0,
    width: '90%',
    borderRadius: '6px',
    fontSize: '1rem',
    fontWeight: 'bold',
    boxShadow: `0 2px 4px 0 ${hexToRgba(buttonColor, 0.6)}`,
    border: 'none',
    margin: '0 18px'
  };

  const fullStyleBtn = {
    height: '3.25rem', 
    bottom: 0, 
    width: '100%'
  };

  const styleBtn = fullWidth ? fullStyleBtn : roundedStyleBtn;
  
  return (
    <LinearProgress
      classes={{
        bar1Buffer: classes.bar1Buffer,
        bar2Buffer: classes.bar2Buffer,
      }}
      variant="buffer"
      style={styleBtn}
      value={width}
      id={id}
  />
  );
};

export default injectSheet(styles)(ProgressButton);