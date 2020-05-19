import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import injectSheet from 'react-jss';
import Color from 'color';


const styles = {
  bar1Buffer: (props) => {
    let color = props.buttonColor ? `#${props.buttonColor}` : '#080808';
    if (color === '#000000') color = '#080808';
    return { backgroundColor: [color, '!important'] };
  },
  bar2Buffer: (props) => {
    let color = props.buttonColor ? `#${props.buttonColor}` : '#080808';
    let lightenFactor = 0.3;
    if (color === '#000000') {
      color = '#080808';
      lightenFactor = 6;
    }
    return { backgroundColor: [Color(color).lighten(lightenFactor).hex(), '!important'] };
  }
};


class ProgressFullButton extends React.PureComponent {
  render() {
    const {
      idTxt,
      buttonColor,
      width,
      classes
    } = this.props;

    const color = buttonColor ? `#${buttonColor}` : 'black';

    return (
      <LinearProgress
        classes={{
          bar1Buffer: classes.bar1Buffer,
          bar2Buffer: classes.bar2Buffer,
        }}
        variant="buffer"
        style={{ height: '3.25rem', bottom: 0, width: '100%' }}
        value={width}
        id={idTxt}
      />
    );
  }
}

export default injectSheet(styles)(ProgressFullButton);
