import { useEffect, useRef } from 'react';

export const useDelayTime = () => {
  const delayTimerRef = useRef<number>();

  const clearTimer = () => {
    if (delayTimerRef.current) {
      window.clearTimeout(delayTimerRef.current);
      delayTimerRef.current = undefined;
    }
  };

  const delaySetPopupVisible = (cb: () => void, delayTime = 0) => {
    clearTimer();
    if (delayTime === 0) {
      cb();
      return;
    }

    delayTimerRef.current = window.setTimeout(() => {
      cb();
      clearTimer();
    }, delayTime * 1000);
  };

  useEffect(() => {
    return () => {
      clearTimer();
    };
  }, []);

  return delaySetPopupVisible;
};
