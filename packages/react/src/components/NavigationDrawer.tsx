import React, {FC, ReactChildren} from "react";
import {css} from "@emotion/css";
const scrim = css({
    position:"fixed",
    top:0,
    left:0,
    right:0,
    bottom: 0,
    zIndex: 100,
    background: "rgba(0, 0, 0, .3)"
});

const Scrim = () => {
    return <div className={scrim}>Scrim</div>
}


interface NavigationDrawerProps {
    modal?: boolean
}

export const NavigationDrawer: FC<NavigationDrawerProps> = ({children, modal = false}) : JSX.Element => {
    let styleObj: any = {
        background: "#fff"
    };
    if(modal){
        styleObj = {
            ...styleObj,
            position: "fixed",
            top: 0,
            left: 0,
            bottom: 0,
            width: "500px",
            zIndex: 110,
        }
    }
    const drawer = css(styleObj);
    return <>
        {modal && <Scrim /> }
        <div className={drawer}>{children}</div>
    </>
}