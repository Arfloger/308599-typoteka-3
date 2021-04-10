'use strict';

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomItem = (someArray) => someArray[getRandomInt(0, someArray.length - 1)];

const shuffle = (someArray) => {
  for (let i = someArray.length - 1; i > 0; i--) {
    const randomPosition = Math.floor(Math.random() * i);
    [someArray[i], someArray[randomPosition]] = [someArray[randomPosition], someArray[i]];
  }

  return someArray;
};

const getShuffleItem = (someArray, min = 1, max = someArray.length - 1) => {
  return shuffle(someArray).slice(min, max);
};

module.exports = {
  getRandomInt,
  getRandomItem,
  shuffle,
  getShuffleItem
};
