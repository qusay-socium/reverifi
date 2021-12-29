import { useEffect } from 'react';

/**
 * React lifecycle hook that runs an effect only once.
 *
 * @param {Function} effect The effect function that will be called in the useEffect.
 */
// eslint-disable-next-line react-hooks/exhaustive-deps
const useEffectOnce = (effect) => useEffect(effect, []);

export default useEffectOnce;
