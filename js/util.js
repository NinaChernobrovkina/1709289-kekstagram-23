function getRandomInt(min, max) {
  const diff = Math.abs(max - min);
  min = Math.min(min, max);
  return Math.floor(Math.random() * (diff + 1)) + min;
}

function checkStringLength(string, maxLength) {
  return string.length <= maxLength;
}

const phrases = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

function getRandomMessage() {
  const phrasesCount = getRandomInt(1, 2);
  let message = '';
  for (let counter = 0; counter < phrasesCount; counter++) {
    const phraseNum = getRandomInt(0, phrases.length - 1);
    message += ` ${phrases[phraseNum]}`;
    phrases.splice(phraseNum, 1);
  }
  return message.trim();
}

const names = [
  'Анатолий',
  'Андокид',
  'Андрей',
  'Андроник',
  'Аникита',
  'Аннерс',
  'Анри',
  'Ансельм',
  'Антипа',
  'Антон',
];

function getRandomName() {
  const nameNum = getRandomInt(0, names.length - 1);
  return names[nameNum];
}

export {getRandomInt, checkStringLength, getRandomMessage, getRandomName};
