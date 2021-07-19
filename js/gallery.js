import {getData} from './network.js';
import {renderPicture, picturesContainer} from './render-pictures.js';
import {renderBigPicture} from './render-big-picture.js';
import {showModalByTemplate} from './modal.js';

getData().then((data) => {
  const fragment = document.createDocumentFragment();
  data.forEach((photo) => {
    const picture = renderPicture(photo);
    picture.addEventListener('click', () => renderBigPicture(photo));
    fragment.appendChild(picture);
  });
  picturesContainer.appendChild(fragment);
}).catch(() => showModalByTemplate('error', {
  titleText: 'Ошибка загрузки данных с сервера',
  buttonText: 'Закрыть',
}));
