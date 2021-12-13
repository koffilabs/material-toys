import {Application, NavigationArea, AppBarArea, BodyArea} from "@material-yue/react";

export default function Layout(){
    return <div>
        <Application>
            <AppBarArea>appbar</AppBarArea>
            <NavigationArea>nav</NavigationArea>
            <BodyArea>body area</BodyArea>
        </Application>
    </div>
}