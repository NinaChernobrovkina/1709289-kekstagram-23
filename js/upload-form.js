import {openModal, closeModal, checkStringLength} from './util.js';

const form = document.querySelector('#upload-select-image');
const uploadFile = form.querySelector('#upload-file');
const formOverlay = form.querySelector('.img-upload__overlay');
const resetFormButton = form.querySelector('#upload-cancel');
const submitButton = form.querySelector('#upload-submit');

uploadFile.addEventListener('change', () => openModal(formOverlay));

resetFormButton.addEventListener('click', () => closeModal(formOverlay));
document.addEventListener('keydown', (evt) => {
  if (evt.code === 'Escape') {
    closeModal(formOverlay);
    form.reset();
  }
});

function checkHashTags() {
  const tagsValue = form.hashtags.value;
  if (!tagsValue) {
    form.hashtags.setCustomValidity('');
    return true;
  }
  const tagsArray = tagsValue.split(' ')
    .map((item) => item.toLowerCase());
  if (tagsArray.length > 5) {
    form.hashtags.setCustomValidity('нельзя указать больше пяти хэш-тегов');
    return false;
  }
  for(let ind = 0; ind < tagsArray.length; ind++) {
    const tag = tagsArray[ind];
    if (!tag.startsWith('#')) {
      form.hashtags.setCustomValidity('хэш-тег начинается с символа # (решётка)');
      return false;
    }
    if (tag.length < 2) {
      form.hashtags.setCustomValidity('хеш-тег не может состоять только из одной решётки');
      return false;
    }
    if (!checkStringLength(tag, 20)) {
      form.hashtags.setCustomValidity('максимальная длина одного хэш-тега 20 символов, включая решётку');
      return false;
    }
    if (!tag.match(/^#[a-zа-я0-9]+$/)) {
      form.hashtags.setCustomValidity('строка после решётки должна состоять из букв и чисел');
      return false;
    }
    if (tagsArray.slice(0, ind).includes(tag)) {
      form.hashtags.setCustomValidity('один и тот же хэш-тег не может быть использован дважды');
      return false;
    }
  }
  form.hashtags.setCustomValidity('');
  return true;
}

function validateForm() {
  checkHashTags();
}

form.hashtags.addEventListener('keydown', (evt) => evt.stopPropagation());
form.description.addEventListener('keydown', (evt) => evt.stopPropagation());
form.hashtags.addEventListener('input', () => form.hashtags.setCustomValidity(''));
form.description.addEventListener('input', () => form.description.setCustomValidity(''));

submitButton.addEventListener('click', validateForm);
