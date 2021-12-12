/**
 * used to get the actual scrollbar width if exists.
 *
 * @return {int} actual scrollbar width
 */
export const getScrollbarWidth = () => {
  const scrollBarVisible =
    window.innerHeight !== document.documentElement.scrollHeight;

  if (!scrollBarVisible) return 0;

  const outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll';
  outer.style.msOverflowStyle = 'scrollbar';
  document.body.appendChild(outer);

  const inner = document.createElement('div');
  outer.appendChild(inner);

  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

  outer.parentNode.removeChild(outer);

  return scrollbarWidth;
};

/**
 * debounces a function.
 *
 * @param {Function}  fn anchor element reference.
 * @param {int}       ms state of the menu.
 *
 * @return {Function}
 */
export const debounce = (fn, ms) => {
  let timer;
  return (...rest) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn(...rest);
    }, ms);
  };
};
