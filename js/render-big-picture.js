import {openModal, closeModal} from './util.js';

const bigPicture = document.querySelector('.big-picture');
const commentsContainer = bigPicture.querySelector('.social__comments');

function renderComment(comment) {
  const commentElement = document.createElement('li');
  commentElement.classList.add('social__comment');
  const commentImage = document.createElement('img');
  commentImage.classList.add('social__picture');
  commentImage.src = comment.avatar;
  commentImage.alt = comment.name;
  commentImage.width = 35;
  commentImage.height = 35;
  commentElement.appendChild(commentImage);
  const commentText = document.createElement('p');
  commentText.classList.add('social__text');
  commentText.textContent = comment.message;
  commentElement.appendChild(commentText);
  return commentElement;
}

function renderBigPicture(photo) {
  openModal(bigPicture);
  bigPicture.querySelector('.big-picture__img > img').src = photo.url;
  bigPicture.querySelector('.likes-count').textContent = photo.likes;
  bigPicture.querySelector('.comments-count').textContent = photo.comments.length;
  bigPicture.querySelector('.social__caption').textContent = photo.description;
  bigPicture.querySelector('.social__comment-count').classList.add('hidden');
  bigPicture.querySelector('.comments-loader').classList.add('hidden');
  commentsContainer.innerHTML = '';
  photo.comments.forEach((comment) => {
    const commentElement = renderComment(comment);
    commentsContainer.appendChild(commentElement);
  });
}

bigPicture.querySelector('.big-picture__cancel').addEventListener('click', () => closeModal(bigPicture));
document.addEventListener('keydown', (evt) => {
  if (evt.code === 'Escape') {
    closeModal(bigPicture);
  }
});

export {renderBigPicture};
