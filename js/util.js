function getRandomInt(min, max) {
  const diff = Math.abs(max - min);
  min = Math.min(min, max);
  return Math.floor(Math.random() * (diff + 1)) + min;
}

function checkStringLength(string, maxLength) {
  return string.length <= maxLength;
}

function getRandomElementsFromArray(array, count) {
  count = Math.min(count, array.length);
  const arrayCopy = array.slice();
  const elements = [];
  for (let counter = 0; counter < count; counter++) {
    const index = getRandomInt(0, arrayCopy.length - 1);
    elements.push(arrayCopy[index]);
    arrayCopy.splice(index, 1);
  }
  return elements;
}

function isEscEvent(evt) {
  return evt.key === 'Escape' || evt.key === 'Esc';
}

export {getRandomInt, checkStringLength, isEscEvent, getRandomElementsFromArray};
