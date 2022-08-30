export const generateSafeSentence = (wordCount) => {
  // 님의 침묵
  // 《님의 침묵》은 한용운의 시로, 같은 이름의 시집 《님의 침묵》에 실린 표제시이다.
  // https://ko.wikipedia.org/wiki/님의_침묵
  const text = `님은 갔습니다. 아아, 사랑하는 나의 님은 갔습니다.
  푸른 산빛을 깨치고 단풍나무 숲을 향하여 난 작은 길을 걸어서 차마 떨치고 갔습니다.
  황금의 꽃같이 굳고 빛나던 옛 맹세는 차디찬 티끌이 되어서 한숨의 미풍에 날아갔습니다.
  날카로운 첫 키스의 추억은 나의 운명의 지침을 돌려 놓고 뒷걸음쳐서 사라졌습니다.
  나는 향기로운 님의 말소리에 귀먹고 꽃다운 님의 얼굴에 눈멀었습니다.
  사랑도 사람의 일이라 만날 때에 미리 떠날 것을 염려하고 경계하지 아니한 것은 아니지만, 이별은 뜻밖의 일이 되고 놀란 가슴은 새로운 슬픔에 터집니다.
  그러나 이별을 쓸데없는 눈물의 원천으로 만들고 마는 것은 스스로 사랑을 깨치는 것인 줄 아는 까닭에 걷잡을 수 없는 슬픔의 힘을 옮겨서 새 희망의 정수박이에 들어부었습니다.
  우리는 만날 때에 떠날 것을 염려하는 것과 같이 떠날 때에 다시 만날 것을 믿습니다.
  아아, 님은 갔지마는 나는 님을 보내지 아니하였습니다.
  제 곡조를 못 이기는 사랑의 노래는 님의 침묵을 휩싸고 돕니다.`;

  const words = wordTokenize(text);

  return generateSentence(words, wordCount);
};

export const generateSafeParagraph = (paragraphCount, wordCount = 50) => {
  // 님의 침묵
  // 《님의 침묵》은 한용운의 시로, 같은 이름의 시집 《님의 침묵》에 실린 표제시이다.
  // https://ko.wikipedia.org/wiki/님의_침묵
  const text = `님은 갔습니다. 아아, 사랑하는 나의 님은 갔습니다.
  푸른 산빛을 깨치고 단풍나무 숲을 향하여 난 작은 길을 걸어서 차마 떨치고 갔습니다.
  황금의 꽃같이 굳고 빛나던 옛 맹세는 차디찬 티끌이 되어서 한숨의 미풍에 날아갔습니다.
  날카로운 첫 키스의 추억은 나의 운명의 지침을 돌려 놓고 뒷걸음쳐서 사라졌습니다.
  나는 향기로운 님의 말소리에 귀먹고 꽃다운 님의 얼굴에 눈멀었습니다.
  사랑도 사람의 일이라 만날 때에 미리 떠날 것을 염려하고 경계하지 아니한 것은 아니지만, 이별은 뜻밖의 일이 되고 놀란 가슴은 새로운 슬픔에 터집니다.
  그러나 이별을 쓸데없는 눈물의 원천으로 만들고 마는 것은 스스로 사랑을 깨치는 것인 줄 아는 까닭에 걷잡을 수 없는 슬픔의 힘을 옮겨서 새 희망의 정수박이에 들어부었습니다.
  우리는 만날 때에 떠날 것을 염려하는 것과 같이 떠날 때에 다시 만날 것을 믿습니다.
  아아, 님은 갔지마는 나는 님을 보내지 아니하였습니다.
  제 곡조를 못 이기는 사랑의 노래는 님의 침묵을 휩싸고 돕니다.`;

  const words = wordTokenize(text);

  return generateParagraph(words, paragraphCount, wordCount);
};

export const removeSpecialCharacters = (text, delimiter = ' ') => {
  return text
    .replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, ' ')
    .replace(/\s+/g, delimiter)
    .trim();
};

export const wordTokenize = (text, delimiter = ' ') => {
  return removeSpecialCharacters(text).split(delimiter);
};

export const generateSentence = (words, wordCount = 3) => {
  let text = '';

  for (let i = 0; i < wordCount; i++) {
    if (i < wordCount - 1) {
      text += words[Math.ceil(Math.random() * (words.length - 1))] + ' ';
    } else {
      text += words[Math.ceil(Math.random() * (words.length - 1))] + '.';
    }
  }

  return text;
};

export const generateParagraph = (words, paragraphCount, wordCount = 50) => {
  let text = '';

  for (let i = 0; i < paragraphCount; i++) {
    if (i < paragraphCount - 1) {
      text += generateSentence(words, wordCount) + '\n\n';
    } else {
      text += generateSentence(words, wordCount);
    }
  }

  return text;
};
