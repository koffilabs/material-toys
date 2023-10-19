import { useEffect } from "react";
export const useOnMount = (onMount: () => () => void) => {
  useEffect(() => {
    return onMount();
  }, []);
};
