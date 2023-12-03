import { RefObject, useEffect } from 'react';

const useOutsideClickHandler = (ref: RefObject<HTMLElement>, clickOutsideCallback: () => void) => {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        clickOutsideCallback();
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Unbind the event listener on clean up
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [clickOutsideCallback, ref]);
};

export default useOutsideClickHandler;
