import {renderBigPicture} from './render-big-picture.js';

const picturesContainer = document.querySelector('.pictures');

const pictureTemplate = document.querySelector('#picture').content.children[0];

function renderPicture(photo) {
  const picture = pictureTemplate.cloneNode(true);
  picture.querySelector('.picture__img').src = photo.url;
  picture.querySelector('.picture__likes').textContent = photo.likes;
  picture.querySelector('.picture__comments').textContent = photo.comments.length;
  return picture;
}

function renderPhotos(photos) {
  const fragment = document.createDocumentFragment();
  photos.forEach((photo) => {
    const picture = renderPicture(photo);
    picture.addEventListener('click', () => renderBigPicture(photo));
    fragment.appendChild(picture);
  });
  picturesContainer.querySelectorAll('.picture').forEach((picture) => picture.remove());
  picturesContainer.appendChild(fragment);
}

export {renderPhotos};
