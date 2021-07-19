import {isEscEvent} from './util.js';

function openModal(element, params = {}) {
  element.classList.remove('hidden');
  document.body.classList.add('modal-open');

  function closeModal() {
    document.body.classList.remove('modal-open');
    element.classList.add('hidden');
    // eslint-disable-next-line no-use-before-define
    document.removeEventListener('keydown', onModalEscKeydown);
    // eslint-disable-next-line no-use-before-define
    params.closeButton.removeEventListener('click', onModalClickClose);
    if (params.afterClose) {
      params.afterClose();
    }
  }

  function onModalEscKeydown(evt) {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      closeModal();
    }
  }

  function onModalClickClose() {
    closeModal();
  }

  document.addEventListener('keydown', onModalEscKeydown);
  params.closeButton.addEventListener('click', onModalClickClose);

  return {
    closeModal: closeModal,
  };
}

function showModalByTemplate(templateId, params = {}) {
  const modalTemplate = document.querySelector(`#${templateId}`).content.children[0];
  const modal = modalTemplate.cloneNode(true);
  const title = modal.querySelector(`.${templateId}__title`);
  const button = modal.querySelector(`.${templateId}__button`);
  if (params.titleText) {
    title.textContent = params.titleText;
  }
  if (params.buttonText) {
    button.textContent = params.buttonText;
  }

  document.body.appendChild(modal);

  function onModalEscKeydown(evt) {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      modal.remove();
      document.removeEventListener('keydown', onModalEscKeydown);
    }
  }
  document.addEventListener('keydown', onModalEscKeydown);

  modal.addEventListener('click', (evt) => {
    if (evt.target === modal) {
      modal.remove();
      document.removeEventListener('keydown', onModalEscKeydown);
    }
  });

  button.addEventListener('click', () => {
    modal.remove();
    document.removeEventListener('keydown', onModalEscKeydown);
  });
}

export {openModal, showModalByTemplate};
