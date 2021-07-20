import {getData} from './network.js';
import {renderPhotos} from './render-pictures.js';
import {showModalByTemplate} from './modal.js';
import {initFilter} from './filter.js';

getData().then((photos) => {
  renderPhotos(photos);
  initFilter(photos);
}).catch(() => showModalByTemplate('error', {
  titleText: 'Ошибка загрузки данных с сервера',
  buttonText: 'Закрыть',
}));
