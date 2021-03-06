import {checkStringLength} from './util.js';
import {openModal, showModalByTemplate} from './modal.js';
import {sendFormData} from './network.js';
import {effectsSettings, MAX_TAGS, MAX_TAG_LENGTH} from './constants.js';

const form = document.querySelector('#upload-select-image');
const uploadFile = form.querySelector('#upload-file');
const formOverlay = form.querySelector('.img-upload__overlay');
const resetFormButton = form.querySelector('#upload-cancel');
const submitButton = form.querySelector('#upload-submit');
const uploadImg = form.querySelector('.img-upload__preview > img');
const effectLevel = form.querySelector('.effect-level');
const sliderElement = form.querySelector('.effect-level__slider');

let curEffect = 'none';
let modalForm;

function initSlider() {
  noUiSlider.create(sliderElement, {
    start: 1,
    range: {
      min: 0,
      max: 1,
    },
    connect: 'lower',
  });
  sliderElement.noUiSlider.on('update', (values, handle) => {
    if (curEffect === 'none') {
      return;
    }
    const filterValue = values[handle];
    uploadImg.style.filter = `${effectsSettings[curEffect].filter}(${filterValue}${effectsSettings[curEffect].units})`;
    const percentsValue = Math.round((filterValue - effectsSettings[curEffect].range[0]) / (effectsSettings[curEffect].range[1] - effectsSettings[curEffect].range[0]) * 100);
    form.querySelector('.effect-level__value').value = `${percentsValue}%`;
  });
}

function changeEffect() {
  uploadImg.className = `effects__preview--${curEffect}`;
  if (curEffect === 'none') {
    effectLevel.classList.add('hidden');
    uploadImg.style.filter = '';
  } else {
    effectLevel.classList.remove('hidden');
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: effectsSettings[curEffect].range[0],
        max: effectsSettings[curEffect].range[1],
      },
      start: effectsSettings[curEffect].range[1],
      step: effectsSettings[curEffect].step,
    });
    sliderElement.noUiSlider.set(effectsSettings[curEffect].range[1]);
  }
}

function closeForm() {
  form.reset();
  sliderElement.noUiSlider.destroy();
  curEffect = 'none';
  changeEffect();
  uploadImg.style.transform = '';
}

uploadFile.addEventListener('change', () => {
  modalForm = openModal(formOverlay, {
    closeButton: resetFormButton,
    afterClose: closeForm,
  });
  initSlider();
});

function checkHashTags() {
  const tagsValue = form.hashtags.value;
  if (!tagsValue) {
    form.hashtags.setCustomValidity('');
    return true;
  }
  const tagsArray = tagsValue.split(' ')
    .map((item) => item.toLowerCase());
  if (tagsArray.length > MAX_TAGS) {
    form.hashtags.setCustomValidity('???????????? ?????????????? ???????????? ???????? ??????-??????????');
    return false;
  }
  for (let ind = 0; ind < tagsArray.length; ind++) {
    const tag = tagsArray[ind];
    if (!tag.startsWith('#')) {
      form.hashtags.setCustomValidity('??????-?????? ???????????????????? ?? ?????????????? # (??????????????)');
      return false;
    }
    if (tag.length < 2) {
      form.hashtags.setCustomValidity('??????-?????? ???? ?????????? ???????????????? ???????????? ???? ?????????? ??????????????');
      return false;
    }
    if (!checkStringLength(tag, MAX_TAG_LENGTH)) {
      form.hashtags.setCustomValidity('???????????????????????? ?????????? ???????????? ??????-???????? 20 ????????????????, ?????????????? ??????????????');
      return false;
    }
    if (!tag.match(/^#[a-z??-??0-9]+$/)) {
      form.hashtags.setCustomValidity('???????????? ?????????? ?????????????? ???????????? ???????????????? ???? ???????? ?? ??????????');
      return false;
    }
    if (tagsArray.slice(0, ind).includes(tag)) {
      form.hashtags.setCustomValidity('???????? ?? ?????? ???? ??????-?????? ???? ?????????? ???????? ?????????????????????? ????????????');
      return false;
    }
  }
  form.hashtags.setCustomValidity('');
  return true;
}

function onClickSubmit() {
  checkHashTags();
}

form.hashtags.addEventListener('keydown', (evt) => evt.stopPropagation());
form.description.addEventListener('keydown', (evt) => evt.stopPropagation());
form.hashtags.addEventListener('input', () => form.hashtags.setCustomValidity(''));
form.description.addEventListener('input', () => form.description.setCustomValidity(''));

function onChangeScale(evt) {
  let scaleChange;
  if (evt.target.classList.contains('scale__control--smaller')) {
    scaleChange = -25;
  } else if (evt.target.classList.contains('scale__control--bigger')) {
    scaleChange = 25;
  } else {
    return;
  }
  let scale = parseInt(form.scale.value, 10);
  scale += scaleChange;
  scale = Math.max(Math.min(scale, 100), 25);
  form.scale.value = `${scale}%`;
  scale /= 100;
  uploadImg.style.transform = `scale(${scale})`;
}

form.querySelector('.img-upload__scale').addEventListener('click', onChangeScale);

function onChangeEffect(evt) {
  if (!evt.target.closest('label')) {
    return;
  }
  curEffect = evt.target.closest('li').querySelector('input').value;
  changeEffect();
}

form.querySelector('.effects__list').addEventListener('click', onChangeEffect);

submitButton.addEventListener('click', onClickSubmit);

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  sendFormData(evt.target)
    .then((response) => {
      modalForm.closeModal();
      if (response.ok) {
        showModalByTemplate('success');
      } else {
        showModalByTemplate('error');
      }
    }).catch(() => {
      modalForm.closeModal();
      showModalByTemplate('error');
    });
});
