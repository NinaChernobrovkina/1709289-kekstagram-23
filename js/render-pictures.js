const picturesContainer = document.querySelector('.pictures');

const pictureTemplate = document.querySelector('#picture').content.children[0];

function renderPicture(photo) {
  const picture = pictureTemplate.cloneNode(true);
  picture.querySelector('.picture__img').src = photo.url;
  picture.querySelector('.picture__likes').textContent = photo.likes;
  picture.querySelector('.picture__comments').textContent = photo.comments.length;
  return picture;
}

export {renderPicture, picturesContainer};
