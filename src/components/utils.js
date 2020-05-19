import Color from 'color';

export default {
  hoverColor(buttonColor) {
    let color = buttonColor ? `${buttonColor}` : '#080808';
    let lightenFactor;
    let hoverColor = Color(`${color}`).darken(0.2).hex();
    if (color === '#000000') {
      color = '#080808';
      lightenFactor = 6;
      hoverColor = Color(color).lighten(lightenFactor).hex();
    }
    return hoverColor;
  }
};
