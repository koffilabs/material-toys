import React, {FC, ReactChildren} from "react";
interface NavigationDrawerProps {
    type?: string
}
export const NavigationDrawer: FC<NavigationDrawerProps> = ({children, type}) : JSX.Element => {
    return <div>NavigationDrawer {children}</div>
}