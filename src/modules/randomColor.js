/**
 * Generating random colors
 * @link https://helderesteves.com/generating-random-colors-js/
 */
export const generateRandomColorHex = () => {
  return '#' + ('00000' + Math.floor(Math.random() * Math.pow(16, 6)).toString(16)).slice(-6);
};

export const generateRandomColorRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return 'rgb(' + red + ', ' + green + ', ' + blue + ')';
};

export const generateRandomColorHsl = () => {
  const hue = Math.floor(Math.random() * 360);
  const saturation = Math.floor(Math.random() * (100 + 1)) + '%';
  const lightness = Math.floor(Math.random() * (100 + 1)) + '%';
  return 'hsl(' + hue + ', ' + saturation + ', ' + lightness + ')';
};

/**
 * Generating random dark colors
 * @link https://helderesteves.com/generating-random-colors-js/
 */

export const generateDarkColorHex = () => {
  let color = '#';
  for (let i = 0; i < 3; i++) color += ('0' + Math.floor((Math.random() * Math.pow(16, 2)) / 2).toString(16)).slice(-2);
  return color;
};

export const generateDarkColorRgb = () => {
  const red = Math.floor((Math.random() * 256) / 2);
  const green = Math.floor((Math.random() * 256) / 2);
  const blue = Math.floor((Math.random() * 256) / 2);
  return 'rgb(' + red + ', ' + green + ', ' + blue + ')';
};

export const generateDarkColorHsl = () => {
  const hue = Math.floor(Math.random() * 360);
  const saturation = Math.floor(Math.random() * (100 + 1)) + '%';
  const lightness = Math.floor(Math.random() * (100 / 2 + 1)) + '%';
  return 'hsl(' + hue + ', ' + saturation + ', ' + lightness + ')';
};

/**
 * Generating random light colors
 * @link https://helderesteves.com/generating-random-colors-js/
 */

export const generateLightColorHex = () => {
  let color = '#';
  for (let i = 0; i < 3; i++)
    color += ('0' + Math.floor(((1 + Math.random()) * Math.pow(16, 2)) / 2).toString(16)).slice(-2);
  return color;
};

export const generateLightColorRgb = () => {
  const red = Math.floor(((1 + Math.random()) * 256) / 2);
  const green = Math.floor(((1 + Math.random()) * 256) / 2);
  const blue = Math.floor(((1 + Math.random()) * 256) / 2);
  return 'rgb(' + red + ', ' + green + ', ' + blue + ')';
};

export const generateLightColorHsl = () => {
  const hue = Math.floor(Math.random() * 360);
  const saturation = Math.floor(Math.random() * (100 + 1)) + '%';
  const lightness = Math.floor((1 + Math.random()) * (100 / 2 + 1)) + '%';
  return 'hsl(' + hue + ', ' + saturation + ', ' + lightness + ')';
};
