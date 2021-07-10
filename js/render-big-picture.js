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
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
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

function closeBigPicture() {
  document.body.classList.remove('modal-open');
  bigPicture.classList.add('hidden');
}

bigPicture.querySelector('.big-picture__cancel').addEventListener('click', closeBigPicture);
document.addEventListener('keydown', (evt) => {
  if (evt.code === 'Escape') {
    closeBigPicture();
  }
});

export {renderBigPicture};
