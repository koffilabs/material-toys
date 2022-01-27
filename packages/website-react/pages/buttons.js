import Head from "next/head";
import { EditIcon, AddIcon } from "@material-toys/icons-react";
import { Button, Card, FAB, Grid, useTheme } from "@material-toys/react";
//
import { material_tokens } from "@material-toys/common";
import { material_tokens_polyfill } from "@material-toys/common";
import { useEffect, useState } from "react";

const tokens = { ...material_tokens_polyfill, ...material_tokens };
// tokens ok
export default function Home() {
  const { ThemeContext, VariantContext } = useTheme();
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
  const [isExtended, setExtended] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      console.log(isExtended);
      setExtended((isExtended) => !isExtended);
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <ThemeContext.Provider value={reactiveTokens}>
      <VariantContext.Provider value={""}>
        <div className="container">
          <Head>
            <title>Material Toys</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossOrigin="true"
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
              rel="stylesheet"
            />
          </Head>

          <main>
            <div>
              {isExtended ? "true" : "false"}
              <Button icon={<AddIcon size="18px" />} className="elevated">
                Elevated Button
              </Button>
              <Button icon={<AddIcon size="18px" />} className="filled">
                Filled Button
              </Button>
              <Button icon={<AddIcon size="18px" />} className="filled-tonal">
                Filled Tonal Button
              </Button>
              <Button icon={<AddIcon size="18px" />} className="outlined">
                Outlined Button
              </Button>
              <Button icon={<AddIcon size="18px" />} className="text">
                Text Button
              </Button>
            </div>
            <div>
              <FAB icon={<EditIcon />} className="surface" />
              <FAB icon={<EditIcon />} />
              <FAB icon={<EditIcon />} className="level1" />

              <FAB icon={<EditIcon size="36px" />} className="large" />
              <FAB icon={<EditIcon size="36px" />} className="level1 large" />
              <FAB icon={<EditIcon />} className="level1 small" />
              <FAB icon={<EditIcon />} className="level1 small" disabled />
            </div>
            <div>
              <h1>Extended FAB</h1>
              <FAB extended={true}>Compose</FAB>
              <FAB className="surface">Compose</FAB>
              <FAB className="secondary">Compose</FAB>
              <FAB className="tertiary">Compose</FAB>
            </div>
            <div>
              <h1>Extended FAB with icons</h1>
              <FAB icon={<EditIcon />} extended={true}>
                Compose
              </FAB>
              <FAB icon={<EditIcon />} className="surface">
                Compose
              </FAB>
              <FAB icon={<EditIcon />} className="secondary">
                Compose
              </FAB>
              <FAB icon={<EditIcon />} className="tertiary">
                Compose
              </FAB>
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
            <Grid>
              <Card className="elevated col-lg-3 col-12 col-sm-6">
                <div className="someContent">
                  <h3>Title - Elevated</h3>
                  <h5>Subhead</h5>
                  Use a card to display content and actions on a single topic.
                  Cards should be easy to scan for relevant information.
                </div>
              </Card>
              <Card className="filled col-lg-3 col-12 col-sm-6">
                <div className="someContent">
                  <h3>Title - Filled</h3>
                  <h5>Subhead</h5>
                  Use a card to display content and actions on a single topic.
                  Cards should be easy to scan for relevant information.
                </div>
              </Card>
              <Card className="outlined col-lg-3 col-12">
                <div className="someContent">
                  <h3>Title - Outlined</h3>
                  <h5>Subhead</h5>
                  Use a card to display content and actions on a single topic.
                  Cards should be easy to scan for relevant information.
                </div>
              </Card>
            </Grid>
          </main>
          <FAB
            style={{ position: "fixed", right: "16px", bottom: "16px" }}
            icon={<EditIcon />}
            extended={isExtended}
          >
            Compose
          </FAB>
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
  );
}
