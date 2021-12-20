import React, {Component, FC} from "react";
import {applicationStyle} from "@material-yue/common";
import {css} from "@emotion/css";
import {NavigationDrawer} from "./NavigationDrawer";
import {NavigationBar} from "./NavigationBar";
import {useMatchMedia, MOBILE, TABLET, LAPTOP, DESKTOP} from "../hooks/useMatchMedia";
import {NavigationRail} from "./NavigationRail";
interface ApplicationArgs {
    appBarArea: Component,
    navigationArea: Component,
    bodyArea: Component,
    mobileNavigation?: "bar"|"drawer"
}
export const Application: FC<ApplicationArgs> = ({appBarArea, navigationArea, bodyArea, mobileNavigation = "bar"}) => {
    const yueApplication = css(applicationStyle);
    const [mediaMatch] = useMatchMedia();
    const cname = `${yueApplication}${mobileNavigation === "drawer" ? " drawer" : ""}`
    return <div className={cname}>
        {/*{mediaMatch}*/}
        <div className="appBar">{appBarArea}</div>
        <nav className="navigation">{

            // mobileNavigation === drawer
            // mobile: modal navigation drawer
            // tablet: modal navigation drawer
            // laptop: navigation drawer

            // mobileNavigation === bar
            // mobile: navigation bar
            // tablet: navigation rail
            // laptop: permanent navigation drawer

            // TODO add matchMedia here
            mediaMatch === MOBILE
            ?
                mobileNavigation === "drawer" ?
                <NavigationDrawer modal={true}>{navigationArea}</NavigationDrawer>
                :
                <NavigationBar>{navigationArea}</NavigationBar>
            :
            mediaMatch === TABLET
            ?
                mobileNavigation === "drawer" ?
                <NavigationDrawer modal={true}>{navigationArea}</NavigationDrawer>
                :
                <NavigationRail>{navigationArea}</NavigationRail>
            :
            mediaMatch === LAPTOP || mediaMatch === DESKTOP
                ?
                mobileNavigation === "drawer" ?
                    <NavigationDrawer>{navigationArea}</NavigationDrawer>
                    :
                    <NavigationRail>{navigationArea}</NavigationRail>
                :
                <div>End</div>
        }

        </nav>
        <main className="body">{bodyArea}</main>
    </div>
}