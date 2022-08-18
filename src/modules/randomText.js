import _ from "lodash";

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
  let text = "";

  for (let i = 0, l = characters.length; i < length; i++) {
    text += characters.charAt(Math.floor(Math.random() * l));
  }

  return text;
};

export const generateSafeRandomString = (characters, length, array) => {
  let text = generateRandomString(characters, length);
  let collection = array.split(",").map((str) => str.trim());

  if (_.includes(collection, text)) {
    text = generateSafeRandomString(characters, length, array);
  }

  return text;
};

export const generateRandomArray = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

export const generateRandomHangul = (len) => {
  let str = "";

  for (var i = 0; i < len; i++) {
    str += String.fromCharCode(44031 + Math.ceil(Math.random() * 11172));
  }

  return str;
};

export const generateRandomHangulName = () => {
  let fullName = "";
  let firstName =
    "김이박최정강조윤장임한오서신권황안송류전홍고문양손배조백허유남심노정하곽성차주우구신임나전민유진지엄채원천방공강현함변염양변여추노도소신석선설마주연방위표명기반왕모장남탁국여진구";
  let lastName =
    "가강건경고관광구규근기길나남노누다단달담대덕도동두라래로루리마만명무문미민바박백범별병보사산상새서석선설섭성세소솔수숙순숭슬승시신아안애엄여연영예오옥완요용우원월위유윤율으은의이익인일자잔장재전정제조종주준중지진찬창채천철초춘충치탐태택판하한해혁현형혜호홍화환회효훈휘희운모배부림봉혼황량린을비솜공면탁온디항후려균묵송욱휴언들견추걸삼열웅분변양출타흥겸곤번식란더손술반빈실직악람권복심헌엽학개평늘랑향울련";

  for (var i = 0; i < 1; i++) {
    fullName += firstName.charAt(Math.floor(Math.random() * firstName.length));
  }

  for (var k = 0; k < 2; k++) {
    fullName += lastName.charAt(Math.floor(Math.random() * lastName.length));
  }

  return fullName;
};
