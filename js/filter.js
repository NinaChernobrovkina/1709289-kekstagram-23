import {getRandomElementsFromArray} from './util.js';
import {RANDOM_FILTER_COUNT} from './constants.js';
import {renderPhotos} from './render-pictures.js';
import {debounce} from './utils/debounce.js';

const filters = document.querySelector('.img-filters');
const filtersForm = filters.querySelector('.img-filters__form');

function initFilter(photos) {
  filters.classList.remove('img-filters--inactive');
  let sortedPhotos;
  function onClickFilter(evt) {
    const clickedButton = evt.target.closest('.img-filters__button');
    if (!clickedButton) {
      return;
    }
    if (clickedButton.classList.contains('img-filters__button--active')) {
      return;
    }
    filtersForm.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
    clickedButton.classList.add('img-filters__button--active');
    switch (clickedButton.id) {
      case 'filter-default':
        renderPhotos(photos);
        break;
      case 'filter-random':
        renderPhotos(getRandomElementsFromArray(photos, RANDOM_FILTER_COUNT));
        break;
      case 'filter-discussed':
        if (!sortedPhotos) {
          sortedPhotos = photos.slice();
          sortedPhotos.sort((photo1, photo2) => photo2.comments.length - photo1.comments.length);
        }
        renderPhotos(sortedPhotos);
        break;
    }
  }
  filtersForm.addEventListener('click', debounce(onClickFilter));
}

export {initFilter};
