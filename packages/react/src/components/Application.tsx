import React, {Component} from "react";
import {applicationStyle} from "@material-yue/common";
import {css} from "@emotion/css";
import {NavigationDrawer} from "./NavigationDrawer";
import {NavigationBar} from "./NavigationBar";
import {useMatchMedia} from "../hooks/useMatchMedia";
interface ApplicationArgs {
    appBarArea: Component,
    navigationArea: Component,
    bodyArea: Component,
    mobileNavigation?: "bar"|"drawer"
}
export const Application = ({appBarArea, navigationArea, bodyArea, mobileNavigation = "bar"}: ApplicationArgs) => {
    const yueApplication = css(applicationStyle);
    const [mediaMatch] = useMatchMedia();
    const cname = `${yueApplication}${mobileNavigation === "drawer" ? " drawer" : ""}`
    return <div className={cname}>
        {mediaMatch}
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
            mobileNavigation === "drawer" ?
                <NavigationDrawer>{navigationArea}</NavigationDrawer>
                :
                <NavigationBar>{navigationArea}</NavigationBar>}
        </nav>
        <main className="body">{bodyArea}</main>
    </div>
}