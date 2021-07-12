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
  const phrasesTmp = phrases.slice();
  for (let counter = 0; counter < phrasesCount; counter++) {
    const phraseNum = getRandomInt(0, phrasesTmp.length - 1);
    message += ` ${phrasesTmp[phraseNum]}`;
    phrasesTmp.splice(phraseNum, 1);
  }
  return message.trim();
}

function getRandomName() {
  const nameNum = getRandomInt(0, names.length - 1);
  return names[nameNum];
}

function openModal(element) {
  element.classList.remove('hidden');
  document.body.classList.add('modal-open');
}

function closeModal(element) {
  document.body.classList.remove('modal-open');
  element.classList.add('hidden');
}

export {getRandomInt, checkStringLength, getRandomMessage, getRandomName, openModal, closeModal};
