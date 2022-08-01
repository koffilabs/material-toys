import React, {FC, ReactNode} from "react";
import {NavigationDrawer} from "./NavigationDrawer";
interface NavigationRailProps {
    children?: ReactNode;
}
export const NavigationRail = ({children}: NavigationRailProps) => {
    return <NavigationDrawer mode="rail">{children}</NavigationDrawer>
}