import {getRandomInt, getRandomMessage, getRandomName} from './util.js';

function getRandomComments(photoId) {
  const comments = [];
  const commentsCount = getRandomInt(0, 4);
  for (let counter = 0; counter < commentsCount; counter++) {
    const avatarId = getRandomInt(1, 6);
    const minId = photoId * 100 + 25 * counter;
    const maxId = minId + 24;
    comments.push({
      id: getRandomInt(minId, maxId),
      avatar: `img/avatar-${avatarId}.svg`,
      message: getRandomMessage(),
      name: getRandomName(),
    });
  }
  return comments;
}

function getPhotosTest(count = 25) {
  const photos = [];
  for (let id = 1; id <= count; id++) {
    photos.push({
      id: id,
      url: `photos/${id}.jpg`,
      description: `Фотография №${id}`,
      likes: getRandomInt(15, 200),
      comments: getRandomComments(id),
    });
  }
  return photos;
}

const data = getPhotosTest();

export {data};
