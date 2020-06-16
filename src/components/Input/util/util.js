import Color from 'color';

export default {
  openBase64(base64URL, fileType) { // Display a base64 URL inside an iframe in another window.
    const win = window.open();
    if (fileType === 'image') win.document.write(`<img src="${base64URL}" style="border:0; top:0px; left:0px; bottom:0px; right:0px; max-width:100%; max-height:100%;"/>`);
    else win.document.write(`<iframe src="${base64URL}" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>`);
  },
  shortenFileName(str, maxLen) {
    if (str.length <= maxLen) return str;

    let firstHalf = str.split('.');
    const end = `.${firstHalf.pop()}`;

    firstHalf = firstHalf.join('').split('');
    const secondHalf = firstHalf.splice(firstHalf.length / 2);

    let i = firstHalf.length + secondHalf.length + end.length + 3;
    let popFirstHalf = false;
    while (i > maxLen) {
      if (popFirstHalf) firstHalf.pop();
      else if (secondHalf.length > 1) secondHalf.shift();
      popFirstHalf = !popFirstHalf;
      i -= 1;
    }
    return `${firstHalf.join('')}...${secondHalf.join('')}${end}`;
  },
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
