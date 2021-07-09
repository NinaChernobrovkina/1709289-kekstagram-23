import {data} from './data.js';
import {renderPicture, picturesContainer} from './render-pictures.js';
import {renderBigPicture} from './render-big-picture.js';

const fragment = document.createDocumentFragment();

data.forEach((photo) => {
  const picture = renderPicture(photo);
  picture.addEventListener('click', () => renderBigPicture(photo));
  fragment.appendChild(picture);
});

picturesContainer.appendChild(fragment);
