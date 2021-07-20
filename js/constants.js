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

const phrases = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const COMMENTS_ON_LOAD = 5;
const MAX_TAGS = 5;
const MAX_TAG_LENGTH = 20;

const effectsSettings = {
  chrome: {
    filter: 'grayscale',
    range: [0, 1],
    step: 0.1,
    units: '',
  },
  sepia: {
    filter: 'sepia',
    range: [0, 1],
    step: 0.1,
    units: '',
  },
  marvin: {
    filter: 'invert',
    range: [0, 100],
    step: 1,
    units: '%',
  },
  phobos: {
    filter: 'blur',
    range: [0, 3],
    step: 0.1,
    units: 'px',
  },
  heat: {
    filter: 'brightness',
    range: [1, 3],
    step: 0.1,
    units: '',
  },
};

const GET_PHOTOS_URL = 'https://23.javascript.pages.academy/kekstagram/data';

export {names, phrases, effectsSettings, COMMENTS_ON_LOAD, MAX_TAGS, MAX_TAG_LENGTH, GET_PHOTOS_URL};
