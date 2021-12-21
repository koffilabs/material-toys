import {useEffect, useState} from "react";
export const MOBILE = "mobile";
export const TABLET = "tablet";
export const LAPTOP = "laptop";
export const DESKTOP = "desktop";
export const useMatchMedia: Function = () => {
    const [mediaMatch, setMediaMatch] = useState(MOBILE);
    const mobileQuery = window.matchMedia("(max-width: 599px)");
    const tabletQuery = window.matchMedia("(min-width: 600px) and (max-width: 1239px)");
    const laptopQuery = window.matchMedia("(min-width: 1240px) and (max-width: 1439px)");
    const desktopQuery = window.matchMedia("(min-width: 1440px)");
    const setMatch = () => {
        switch(true){
            case mobileQuery.matches:
                setMediaMatch(MOBILE);
                break;
            case tabletQuery.matches:
                setMediaMatch(TABLET);
                break;
            case laptopQuery.matches:
                setMediaMatch(LAPTOP);
                break;
            case desktopQuery.matches:
                setMediaMatch(DESKTOP);
                break;
            default:
                break;
        }
    }
    useEffect(() => {
        setMatch();
    }, [])
    useEffect(() => {
        mobileQuery.addEventListener("change", setMatch)
        tabletQuery.addEventListener("change", setMatch)
        laptopQuery.addEventListener("change", setMatch)
        desktopQuery.addEventListener("change", setMatch)
        return () => {
            mobileQuery.removeEventListener("change", setMatch)
            tabletQuery.removeEventListener("change", setMatch)
            laptopQuery.removeEventListener("change", setMatch)
            desktopQuery.removeEventListener("change", setMatch)
        }
    }, []);
    return [mediaMatch];
};