import {GET_PHOTOS_URL} from './constants.js';

function getData() {
  return fetch(GET_PHOTOS_URL)
    .then((response) => {
      if (response.ok) {
        return response;
      }

      throw new Error(`${response.status} — ${response.statusText}`);
    })
    .then((response) => response.json());
}

function sendFormData(form) {
  const formData = new FormData(form);
  return fetch(
    form.action,
    {
      method: 'POST',
      body: formData,
    },
  );
}

export {getData, sendFormData};
