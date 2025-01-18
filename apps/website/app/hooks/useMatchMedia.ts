"use client";
import { useEffect, useState } from "react";
export const MOBILE = "mobile";
export const TABLET = "tablet";
export const LAPTOP = "laptop";
export const DESKTOP = "desktop";
export const useMatchMedia: () => [string] = () => {
  let mobileQuery, tabletQuery, laptopQuery, desktopQuery;

  let initialMatch = "";
  switch (true) {
    case mobileQuery?.matches:
      initialMatch = MOBILE;
      break;
    case tabletQuery?.matches:
      initialMatch = TABLET;
      break;
    case laptopQuery?.matches:
      initialMatch = LAPTOP;
      break;
    case desktopQuery?.matches:
      initialMatch = DESKTOP;
      break;
    default:
      break;
  }

  const [mediaMatch, setMediaMatch] = useState<string>(initialMatch);
  const setMatch = () => {
    switch (true) {
      case mobileQuery?.matches:
        setMediaMatch(MOBILE);
        break;
      case tabletQuery?.matches:
        setMediaMatch(TABLET);
        break;
      case laptopQuery?.matches:
        setMediaMatch(LAPTOP);
        break;
      case desktopQuery?.matches:
        setMediaMatch(DESKTOP);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if(window){
      mobileQuery = window?.matchMedia("(max-width: 599px)");
      tabletQuery = window?.matchMedia(
        "(min-width: 600px) and (max-width: 1239px)"
      );
      laptopQuery = window?.matchMedia(
        "(min-width: 1240px) and (max-width: 1439px)"
      );
      desktopQuery = window?.matchMedia("(min-width: 1440px)");
    
      setMatch();
    }
  }, []);
  useEffect(() => {
    mobileQuery?.addEventListener("change", setMatch);
    tabletQuery?.addEventListener("change", setMatch);
    laptopQuery?.addEventListener("change", setMatch);
    desktopQuery?.addEventListener("change", setMatch);
    return () => {
      mobileQuery?.removeEventListener("change", setMatch);
      tabletQuery?.removeEventListener("change", setMatch);
      laptopQuery?.removeEventListener("change", setMatch);
      desktopQuery?.removeEventListener("change", setMatch);
    };
  }, []);
  return [mediaMatch];
};
