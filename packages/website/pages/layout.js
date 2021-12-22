import dynamic from 'next/dynamic'
import {NavigationArea, AppBarArea, BodyArea} from "@material-yue/react";
// import {} from "@material-yue/react";
import {useEffect, useState} from "react";
const Application = dynamic(() => import('@material-yue/react').then((mod) => {
    return mod.Application
}), {
    ssr: false
});
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