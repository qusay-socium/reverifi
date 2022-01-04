/**
 * Get the scrollbar width if it exists.
 *
 * @return {number} Scrollbar width.;
 */
export const getScrollbarWidth = () => {
  // TODO: find a better implementation
  const scrollBarVisible =
    window.innerHeight !== document.documentElement.scrollHeight;

  if (!scrollBarVisible) {
    return 0;
  }

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

export default {
  getScrollbarWidth,
};
