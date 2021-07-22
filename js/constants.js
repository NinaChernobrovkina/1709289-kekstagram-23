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

const RANDOM_FILTER_COUNT = 10;

export {effectsSettings, COMMENTS_ON_LOAD, MAX_TAGS, MAX_TAG_LENGTH, GET_PHOTOS_URL, RANDOM_FILTER_COUNT};
