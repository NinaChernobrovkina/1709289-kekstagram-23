import {data} from './data.js';

function renderPicture(photo, template) {
  const picture = template.cloneNode(true);
  picture.querySelector('.picture__img').src = photo.url;
  picture.querySelector('.picture__likes').textContent = photo.likes;
  picture.querySelector('.picture__comments').textContent = photo.comments.length;
  return picture;
}

const picturesContainer = document.querySelector('.pictures');

const pictureTemplate = document.querySelector('#picture').content.children[0];

const fragment = document.createDocumentFragment();

data.forEach((photo) => {
  const picture = renderPicture(photo, pictureTemplate);
  fragment.appendChild(picture);
});

picturesContainer.appendChild(fragment);
