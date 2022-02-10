import { useEffect } from 'react';

/**
 * use Show Toast Bar hook that reset state after specified time
 *
 * @param {Bool} isShown state
 * @param {Function} setIsShown function that change state value
 * @param {Number} time time to reset the state in millisecond defaults to (2000 = 2s)
 *
 */

const useShowToastBar = (isShown, setIsShown, time = 2000) =>
  useEffect(() => {
    const timeId = setTimeout(() => {
      setIsShown(false);
    }, time);

    return () => {
      clearTimeout(timeId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isShown]);

export default useShowToastBar;
