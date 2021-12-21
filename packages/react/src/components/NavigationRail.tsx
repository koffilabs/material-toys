import React, {FC} from "react";
import {NavigationDrawer} from "./NavigationDrawer";

export const NavigationRail: FC = ({children}) => {
    return <NavigationDrawer mode="rail">{children}</NavigationDrawer>
}