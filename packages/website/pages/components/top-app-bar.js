import { MT } from "@material-toys/react";

import {
  ArrowBackIcon,
  MenuIcon,
  OutlinedAccountCircleIcon,
  AttachFileIcon,
  EventIcon,
  MoreVertIcon,
} from "@material-toys/icons-react";
import classes from "./navigation-bar.module.scss";

import React, { useState } from "react";
import { Layout } from "../../components/Layout";
import { BlockComponentCanvas } from "../../components/BlockComponentCanvas";
import dynamic from "next/dynamic";
const TopAppBar = dynamic(
  () =>
    import("@material-toys/react").then((mod) => {
      return mod.TopAppBar;
    }),
  {
    ssr: false,
  }
);
export default function TopAppBarPage() {
  return (
    <Layout>
      <MT>
        <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
          <BlockComponentCanvas>
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
            </div>{" "}
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
            </div>{" "}
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
          </BlockComponentCanvas>
        </div>
      </MT>
    </Layout>
  );
}
