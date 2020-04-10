const THEME_LENGTH = 32;
const SPACE_MIN = 4;

const breakpoint = [320, 768, 1024, 1280, 1440].map((elem) => `${elem}px`);

const height = Array.from(Array(THEME_LENGTH))
  .map((el, index) => SPACE_MIN * index)
  .map((elem) => `${elem}px`);

const space = [0, 4, 8, 16, 32, 64, 128, 256, 512].map((elem) => `${elem}px`);

export default {
  breakpoint,
  height,
  space
};
