import { MT, TopAppBar } from "@material-toys/react";

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

export default function TopAppBarPage() {
  return (
    <Layout>
      <MT>
        <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
          <BlockComponentCanvas>
            <div className={classes["bar-container"]}>
              <TopAppBar
                navigationIcon={<MenuIcon />}
                headline={"Title Large"}
                trailingIcons={[<OutlinedAccountCircleIcon />]}
              />
            </div>
            <div className={classes["bar-container"]}>
              <TopAppBar
                type="small"
                navigationIcon={<ArrowBackIcon />}
                headline={"Title Large"}
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
