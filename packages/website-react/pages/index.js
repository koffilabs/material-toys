import Head from "next/head";
import { EditIcon, AddIcon } from "@material-toys/icons-react";
import Link from "next/link";
import classes from "./index.module.scss";
import {
  Button,
  Card,
  ExtendedFAB,
  FAB,
  Grid,
  useTheme,
} from "@material-toys/react";
//
import { material_tokens } from "@material-toys/common";
import { material_tokens_polyfill } from "@material-toys/common";
import { useEffect, useState } from "react";
import { Logo } from "./components/Logo";

const tokens = { ...material_tokens_polyfill, ...material_tokens };
// tokens ok
export default function Home() {
  const { ThemeContext, VariantContext } = useTheme();
  const [reactiveTokens, setReactiveTokens] = useState(tokens);

  return (
    <>
      <div className={classes.topbar}>
        <div className={classes.container}>
          {/*<Image src="/MT.svg" alt="" width={94} height={46} />*/}
          <Logo />

          <nav>
            <ul>
              <li>
                {" "}
                <Link href="/quickstart">quickstart</Link>
              </li>
              <li>
                <Link href="/layout">docs</Link>
              </li>
              <li>
                <Link href="/about">about</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className={classes.container}>
        <Head>
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

        <div className="container">
          <main className={classes.content}>
            <section className={classes.cover}>
              <h1>Material Toys</h1>
              <h2>A Material You implementation for React</h2>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
