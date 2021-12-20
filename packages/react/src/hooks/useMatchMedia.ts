import {useEffect, useState} from "react";
export const MOBILE = "mobile";
export const TABLET = "tablet";
export const LAPTOP = "laptop";
export const DESKTOP = "desktop";
export const useMatchMedia: Function = () => {
    console.log("match media")
    const [mediaMatch, setMediaMatch] = useState(MOBILE);
    const mobileQuery = window.matchMedia("(max-width: 599px)");
    const tabletQuery = window.matchMedia("(min-width: 600px) and (max-width: 1239px)");
    const laptopQuery = window.matchMedia("(min-width: 1240px) and (max-width: 1439px)");
    const desktopQuery = window.matchMedia("(min-width: 1440px)");
    const setMatch = () => {
        switch(true){
            case mobileQuery.matches:
                setMediaMatch(MOBILE);
                console.log("SHOULD CHANGE to mobile");
                break;
            case tabletQuery.matches:
                setMediaMatch(TABLET);
                console.log("SHOULD CHANGE to tablet");
                break;
            case laptopQuery.matches:
                setMediaMatch(LAPTOP);
                console.log("SHOULD CHANGE to laptop");
                break;
            case desktopQuery.matches:
                setMediaMatch(DESKTOP);
                console.log("SHOULD CHANGE to desktop");
                break;
            default:
                break;
        }
    }
    useEffect(() => {
        setMatch();
    }, [])
    useEffect(() => {
        console.log("useEffect start");
        mobileQuery.addEventListener("change", setMatch)
        tabletQuery.addEventListener("change", setMatch)
        laptopQuery.addEventListener("change", setMatch)
        desktopQuery.addEventListener("change", setMatch)
        return () => {
            console.log("useEffect end");
            mobileQuery.removeEventListener("change", setMatch)
            tabletQuery.removeEventListener("change", setMatch)
            laptopQuery.removeEventListener("change", setMatch)
            desktopQuery.removeEventListener("change", setMatch)
        }
    }, []);
    return [mediaMatch];
};