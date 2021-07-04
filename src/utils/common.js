const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const debounce = (func, interval) => {
  let timeout = null;
  return (...args) => {
    const context = this;
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      func.apply(context, args);
    }, interval);
  };
};

const roundOffWithBase = (value, base) => {
  return base * Math.round(value / base);
};

export { debounce, roundOffWithBase, capitalize };
