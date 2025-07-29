/**
 * Throttle
 */
export const throttle = (callback: Function, delay: number = 100) => {
  var wait = false;
  return function () {
    if (!wait) {
      callback();
      wait = true;
      setTimeout(function () {
        wait = false;
      }, delay);
    }
  };
};

/**
 * Debounce
 */
export const debounce = (callback: Function, delay: number = 200) => {
  let timeout: ReturnType<typeof setTimeout> | undefined;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback();
    }, delay);
  };
};
