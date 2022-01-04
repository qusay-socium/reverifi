/**
 * Creates a debounced function that delays invoking
 * the provided function until provided milliseconds.
 *
 * @param  {Function} func The function to debounce.
 * @param  {number} [wait=50] The number of milliseconds to delay.
 *
 * @return {Function} Returns the new debounced function.
 */
const debounce = (func, wait = 50) => {
  let inDebounce = null;
  return (args) => {
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => func(args), wait);
  };
};

export default debounce;
