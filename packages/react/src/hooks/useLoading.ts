import { useEffect, useState } from "react";

export const useLoading = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
  }, []);
  return { isLoading };
};
