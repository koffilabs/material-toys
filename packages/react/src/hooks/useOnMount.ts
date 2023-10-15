import { useEffect } from "react";

interface UseOnMountProps {}
export const useOnMount = (onMount: () => void, onUnmount?: () => void) => {
  useEffect(() => {
    onMount();
    return onUnmount;
  }, []);
};
