"use client";
import { useEffect, useState } from "react";
export const MOBILE = "mobile";
export const TABLET = "tablet";
export const LAPTOP = "laptop";
export const DESKTOP = "desktop";
export const useMatchMedia = (query: string): boolean => {
  const initialMediaQueryList: boolean = window?.matchMedia(query)?.matches;
  const [mediaQueryMatches, setMediaQueryMatches] = useState<boolean>(
    initialMediaQueryList,
  );
  let theQuery;
  if (window) {
    theQuery = window?.matchMedia(query);
  }
  const setMatch = () => {
    setMediaQueryMatches(theQuery.matches);
  };
  useEffect(() => {
    theQuery?.addEventListener("change", setMatch);

    return () => {
      theQuery?.removeEventListener("change", setMatch);
    };
  }, []);
  return mediaQueryMatches;
};
