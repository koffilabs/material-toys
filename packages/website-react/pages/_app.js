// TODO: import from node_modules (the library should provide a global css)
import "../css/main.scss";
export default function app({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />{" "}
      <style global jsx>
        {`
          html,
          body,
          #__next,
          div#__next > div {
            height: 100%;
          }
          .mt-loading * {
            //transition: none !important;
          }
        `}
      </style>
    </>
  );
}
