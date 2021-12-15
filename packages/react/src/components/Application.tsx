import React, {Component} from "react";
import {applicationStyle} from "@material-yue/common";
import {css} from "@emotion/css";
import {NavigationDrawer} from "./NavigationDrawer";
import {NavigationBar} from "./NavigationBar";
interface ApplicationArgs {
    appBarArea: Component,
    navigationArea: Component,
    bodyArea: Component,
    mobileNavigation?: "bar"|"drawer"
}
export const Application = ({appBarArea, navigationArea, bodyArea, mobileNavigation = "bar"}: ApplicationArgs) => {
    const yueApplication = css(applicationStyle);
    const cname = `${yueApplication}${mobileNavigation === "drawer" ? " drawer" : ""}`
    return <div className={cname}>
        <div className="appBar">{appBarArea}</div>
        <nav className="navigation">{
            mobileNavigation === "drawer" ?
                <NavigationDrawer>{navigationArea}</NavigationDrawer>
                :
                <NavigationBar>{navigationArea}</NavigationBar>}
        </nav>
        <main className="body">{bodyArea}</main>
    </div>
}