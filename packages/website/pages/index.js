import Head from 'next/head'
import {EditIcon, AddIcon} from "@material-yue/icons-react";
import {Button, useTheme} from "@material-yue/react";
//
import {material_tokens} from "@material-yue/common";
import {material_tokens_polyfill} from "@material-yue/common";
import {useEffect, useState} from "react";

const tokens = {...material_tokens_polyfill, ...material_tokens};
// tokens ok
export default function Home() {
    const {ThemeContext, VariantContext} = useTheme();
    const [reactiveTokens, setReactiveTokens] = useState(tokens);
    // useEffect(() => {
    //
    //     setTimeout(() => {
    //         tokens.MdSysColorPrimary = "red";
    //         setReactiveTokens({...tokens});
    //         // variant.value = "";
    //         console.log("done")
    //     }, 2000);
    // }, [])
    return (
        <ThemeContext.Provider value={reactiveTokens}>
            <VariantContext.Provider value={""}>
                <div className="container">
                    <Head>
                        <title>Create Next App</title>
                        <link rel="icon" href="/favicon.ico"/>
                        <link rel="preconnect" href="https://fonts.googleapis.com"/>
                        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"/>
                    </Head>

                    <main>
                        <Button icon={<AddIcon size="18px"/>} className="elevated">Elevated Button</Button>
                        <Button icon={<AddIcon size="18px"/>} className="filled">Filled Button</Button>
                        <Button icon={<AddIcon size="18px"/>} className="filled-tonal">Filled Tonal Button</Button>
                        <Button icon={<AddIcon size="18px"/>} className="outlined">Outlined Button</Button>
                    </main>
                    <style jsx>{`
      `}</style>
                </div>
            </VariantContext.Provider>
        </ThemeContext.Provider>
    )
}
