import { useEffect, useState } from "react";

const useDebounce = (callback: () => void, value: any, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      callback();
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [callback, delay, value]);

  return debouncedValue;
};

export default useDebounce;
