function getRandomInt(min, max) {
  const diff = Math.abs(max - min);
  min = Math.min(min, max);
  return Math.floor(Math.random() * (diff + 1)) + min;
}

function checkStringLength(string, maxLength) {
  return string.length <= maxLength;
}

getRandomInt(3, 7);
checkStringLength('asd', 2);
