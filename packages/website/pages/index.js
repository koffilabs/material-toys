import Head from 'next/head'
import {EditIcon, AddIcon} from "@material-yue/icons-react";
import {Button, Card, ExtendedFAB, FAB, useTheme} from "@material-yue/react";
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
                        <div>
                            <Button icon={<AddIcon size="18px"/>} className="elevated">Elevated Button</Button>
                            <Button icon={<AddIcon size="18px"/>} className="filled">Filled Button</Button>
                            <Button icon={<AddIcon size="18px"/>} className="filled-tonal">Filled Tonal Button</Button>
                            <Button icon={<AddIcon size="18px"/>} className="outlined">Outlined Button</Button>
                            <Button icon={<AddIcon size="18px"/>} className="text">Text Button</Button>
                        </div>
                        <div>
                            <FAB className="surface"><EditIcon/></FAB>
                            <FAB><EditIcon/></FAB>
                            <FAB className="level1"><EditIcon/></FAB>
                            <FAB className="large"><EditIcon size="36px"/></FAB>
                            <FAB className="level1 large"><EditIcon size="36px"/></FAB>
                            <FAB className="level1 small"><EditIcon/></FAB>
                            <FAB className="level1 small" disabled><EditIcon/></FAB>
                        </div>
                        <div>
                            <h1>Extended FAB</h1>
                            <ExtendedFAB>
                                Compose
                            </ExtendedFAB>
                            <ExtendedFAB className="surface">
                                Compose
                            </ExtendedFAB>
                            <ExtendedFAB className="secondary">
                                Compose
                            </ExtendedFAB>
                            <ExtendedFAB className="tertiary">
                                Compose
                            </ExtendedFAB>
                        </div>
                        <div>
                            <h1>Extended FAB with icons</h1>
                            <ExtendedFAB>
                                <EditIcon/>
                                Compose
                            </ExtendedFAB>
                            <ExtendedFAB className="surface">
                                <EditIcon/>
                                Compose
                            </ExtendedFAB>
                            <ExtendedFAB className="secondary">
                                <EditIcon/>
                                Compose
                            </ExtendedFAB>
                            <ExtendedFAB className="tertiary">
                                <EditIcon/>
                                Compose
                            </ExtendedFAB>
                        </div>
                        <div>
                            <Card className="elevated">
                                <div className="someContent">
                                    <h3>Title - Elevated</h3>
                                    <h5>Subhead</h5>
                                    Use a card to display content and actions on a single topic.
                                    Cards should be easy to scan for relevant information.
                                </div>
                            </Card>
                            <Card className="filled">
                                <div className="someContent">
                                    <h3>Title - Elevated</h3>
                                    <h5>Subhead</h5>
                                    Use a card to display content and actions on a single topic.
                                    Cards should be easy to scan for relevant information.
                                </div>
                            </Card>
                            <Card className="outlined">
                                <div className="someContent">
                                    <h3>Title - Elevated</h3>
                                    <h5>Subhead</h5>
                                    Use a card to display content and actions on a single topic.
                                    Cards should be easy to scan for relevant information.
                                </div>
                            </Card>

                        </div>

                    </main>
                    <style jsx>{`
                      .someContent {
                        font-family: "Roboto", sans-serif;
                        padding: 16px 0;
                        // width: "200px",
                        font-size: .75rem;

                        h3 {
                          margin: 0;
                        }

                        h5 {
                          margin: .2rem 0 1rem 0;
                        }
                      }

                      )

                    `}</style>
                </div>
            </VariantContext.Provider>
        </ThemeContext.Provider>
    )
}
