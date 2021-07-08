import {names, phrases} from './constants.js';

function getRandomInt(min, max) {
  const diff = Math.abs(max - min);
  min = Math.min(min, max);
  return Math.floor(Math.random() * (diff + 1)) + min;
}

function checkStringLength(string, maxLength) {
  return string.length <= maxLength;
}

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

function getRandomName() {
  const nameNum = getRandomInt(0, names.length - 1);
  return names[nameNum];
}

export {getRandomInt, checkStringLength, getRandomMessage, getRandomName};
