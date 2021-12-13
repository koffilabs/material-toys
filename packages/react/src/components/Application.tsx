import React from "react";
import {applicationStyle} from "@material-yue/common";
import {css} from "@emotion/css";

export const Application = ({children}) => {
    console.log(children)
    const [appBarArea, navArea, bodyArea] = children;
    const yueApplication = css(applicationStyle)
    return <div className={yueApplication}>
        <div className="appBar">{appBarArea}</div>
        <nav className="navigation">{navArea}</nav>
        <main className="body">{bodyArea}</main>
    </div>
}