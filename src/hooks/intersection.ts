import { useRef } from 'react';

export default function useIntersectionObserver(
  callback: () => void,
  options: IntersectionObserverInit
) {
  const observer = useRef(
    new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          callback();
        }
      });
    }, options)
  );

  const observe = (element: HTMLElement) => {
    observer.current.observe(element);
  };

  const unobserve = (element: HTMLElement) => {
    observer.current.unobserve(element);
  };

  return [observe, unobserve];
}
