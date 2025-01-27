"use client";
import { MT } from "@material-toys/react";

import {
  ArrowBackIcon,
  AttachFileIcon,
  EventIcon,
  MenuIcon,
  MoreVertIcon,
  OutlinedAccountCircleIcon,
} from "@material-toys/icons-react";
import classes from "../navigation-bar.module.scss";

import { useContext } from "react";
import { BlockComponentCanvas } from "../../components/BlockComponentCanvas";
import { CodeBlock } from "../../components/CodeBlock";

import { useThemeContexts } from "@material-toys/react";
import dynamic from "next/dynamic";
import Head from "next/head";
const TopAppBar = dynamic(
  () =>
    import("@material-toys/react").then((mod) => {
      return mod.TopAppBar;
    }),
  {
    ssr: false,
  },
);
export default function top_app_bar_page() {
  const { VariantContext } = useThemeContexts();
  const variant = useContext(VariantContext);

  return (
    <MT variant={variant}>
      <Head>
        <title>Material Toys - Top App Bar</title>
        <meta property="og:title" content="Top App Bar" key="title" />
        <meta name="description" content="Top App Bar page" key="desc" />
        <meta name="og:description" content="Top App Bar page" />
      </Head>
      <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
        <BlockComponentCanvas showGrid={true}>
          <div className={classes["bar-container"]}>
            <TopAppBar
              navigationIcon={<MenuIcon />}
              headline={"Center aligned"}
              trailingIcons={[<OutlinedAccountCircleIcon key="outline" />]}
            />
          </div>
          <div className={classes["bar-container"]}>
            <TopAppBar
              type="small"
              navigationIcon={<ArrowBackIcon />}
              headline={"Small"}
              trailingIcons={[
                <AttachFileIcon key="attach" />,
                <EventIcon key="event" />,
                <MoreVertIcon key="more" />,
              ]}
            />
          </div>
          <div className={classes["bar-container"]}>
            <TopAppBar
              type="medium"
              navigationIcon={<ArrowBackIcon />}
              headline={"Medium"}
              trailingIcons={[
                <AttachFileIcon key="attach" />,
                <EventIcon key="event" />,
                <MoreVertIcon key="more" />,
              ]}
            />
          </div>
          <div className={classes["bar-container"]}>
            <TopAppBar
              type="large"
              navigationIcon={<ArrowBackIcon />}
              headline={"Large"}
              trailingIcons={[
                <AttachFileIcon key="attach" />,
                <EventIcon key="event" />,
                <MoreVertIcon key="more" />,
              ]}
            />
          </div>
        </BlockComponentCanvas>
        <CodeBlock
          code={`import {
  MT, TopAppBar
} from "@material-toys/react";

import {
  ArrowBackIcon,
  MenuIcon,
  OutlinedAccountCircleIcon,
  AttachFileIcon,
  EventIcon,
  MoreVertIcon,
} from "@material-toys/icons-react";

// ...    
<MT>
  <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
      <div className={classes["bar-container"]}>
        <TopAppBar
          navigationIcon={<MenuIcon />}
          headline={"Center aligned"}
          trailingIcons={[<OutlinedAccountCircleIcon />]}
        />
      </div>
      <div className={classes["bar-container"]}>
        <TopAppBar
          type="small"
          navigationIcon={<ArrowBackIcon />}
          headline={"Small"}
          trailingIcons={[
            <AttachFileIcon />,
            <EventIcon />,
            <MoreVertIcon />,
          ]}
        />
      </div>
      <div className={classes["bar-container"]}>
        <TopAppBar
          type="medium"
          navigationIcon={<ArrowBackIcon />}
          headline={"Medium"}
          trailingIcons={[
            <AttachFileIcon />,
            <EventIcon />,
            <MoreVertIcon />,
          ]}
        />
      </div>
      <div className={classes["bar-container"]}>
        <TopAppBar
          type="large"
          navigationIcon={<ArrowBackIcon />}
          headline={"Large"}
          trailingIcons={[
            <AttachFileIcon />,
            <EventIcon />,
            <MoreVertIcon />,
          ]}
        />
      </div>
  </div>
</MT>
`}
        ></CodeBlock>
      </div>
    </MT>
  );
}
