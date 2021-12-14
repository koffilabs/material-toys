import React from "react";
import {applicationStyle} from "@material-yue/common";
import {css} from "@emotion/css";

export const Application = ({appBarArea, navigationArea, bodyArea}) => {
    const yueApplication = css(applicationStyle)
    return <div className={yueApplication}>
        <div className="appBar">{appBarArea}</div>
        <nav className="navigation">{navigationArea}</nav>
        <main className="body">{bodyArea}</main>
    </div>
}