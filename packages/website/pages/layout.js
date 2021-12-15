import {Application, NavigationArea, AppBarArea, BodyArea} from "@material-yue/react";
import {useEffect, useState} from "react";

export default function Layout(){
    return <div>
        <Application
        appBarArea={
            <AppBarArea>appbar</AppBarArea>
        }
        navigationArea={
            <NavigationArea>nav</NavigationArea>
        }
        bodyArea={
            <BodyArea>body</BodyArea>
        }
        mobileNavigation="bar"
        />
    </div>
}