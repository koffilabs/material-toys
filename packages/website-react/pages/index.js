import Head from "next/head";
import { EditIcon, AddIcon } from "@material-toys/icons-react";
import Image from "next/image";

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

const tokens = { ...material_tokens_polyfill, ...material_tokens };
// tokens ok
export default function Home() {
  const { ThemeContext, VariantContext } = useTheme();
  const [reactiveTokens, setReactiveTokens] = useState(tokens);

  return (
    <ThemeContext.Provider value={reactiveTokens}>
      <VariantContext.Provider value={""}>
        <div className="container">
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

          <main>Material Toys homepage</main>
          <Image src="/MT.svg" alt="" width={188} height={94} />

          <style jsx>{`
            main {
              font-family: "Roboto", sans-serif;
              padding: 1.618rem;
              // width: "200px",
              font-size: 1rem;
            }
          `}</style>
        </div>
      </VariantContext.Provider>
    </ThemeContext.Provider>
  );
}
