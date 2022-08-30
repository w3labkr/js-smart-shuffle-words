import charactersJson from '@resources/characters.json';

export const randomArrayShuffle = (array) => {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};

export const generateRandomString = (characters, length) => {
  let text = '';

  for (let i = 0, len = characters.length; i < length; i++) {
    text += characters.charAt(Math.floor(Math.random() * (len - 1)));
  }

  return text;
};

export const generateRandomHangul = (length) => {
  const hangul = charactersJson.KSX1001.join('');
  let text = '';

  for (let i = 0; i < length; i++) {
    text += hangul.charAt(Math.floor(Math.random() * (2350 - 1)));
  }

  return text;
};

export const generateRandomHangulAll = (length) => {
  let text = '';

  for (var i = 0; i < length; i++) {
    text += String.fromCharCode(44031 + Math.ceil(Math.random() * 11172));
  }

  return text;
};
