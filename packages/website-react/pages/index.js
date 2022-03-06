import Head from "next/head";
import Link from "next/link";
import classes from "./index.module.scss";
//

import { Logo } from "./components/Logo";

// tokens ok
export default function Home() {
  return (
    <>
      <div className={classes.topbar}>
        <div className={classes.container}>
          {/*<Image src="/MT.svg" alt="" width={94} height={46} />*/}
          <Logo />

          <nav>
            <ul>
              <li>
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
