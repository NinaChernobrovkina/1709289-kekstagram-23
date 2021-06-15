function getRandomInt(min, max) {
  if (max >= min) {
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }
}

function checkStringLength(string, maxLength) {
  return string.length <= maxLength;
}

getRandomInt(3, 7);
checkStringLength('asd', 2);
