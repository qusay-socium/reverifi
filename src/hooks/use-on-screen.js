import { useEffect, useState } from 'react';

/**
 * hook that check if a component is on view
 *
 * @param {Ref} ref component reference
 * @return {Boolean}  is component in view
 */
function useOnScreen(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = new IntersectionObserver(([entry]) =>
    setIntersecting(entry.isIntersecting)
  );

  useEffect(() => {
    observer.observe(ref.current);
    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isIntersecting;
}

export default useOnScreen;
