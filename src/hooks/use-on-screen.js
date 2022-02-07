import { useState } from 'react';
import useEffectOnce from './use-effect-once';

/**
 * hook that check if a component is on view
 *
 * @param {Ref} ref component reference
 * @return {Boolean}  is component in view
 */
function useOnScreen(ref) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = new IntersectionObserver(
    ([entry]) => setIsIntersecting(entry.isIntersecting),
    { threshold: 1.0 }
  );

  useEffectOnce(() => {
    observer.observe(ref.current);
    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect();
    };
  });

  return isIntersecting;
}

export default useOnScreen;
