import { useEffect, useRef } from "react";
export const usePrevious = (value: any, initial?: any) => {
  const previous = useRef(initial);
  useEffect(() => {
    previous.current = value;
  }, [value]);
  return previous.current;
};
