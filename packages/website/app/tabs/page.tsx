"use client";
import Head from "next/head";
import { Tabs, Tab, TabSection } from "@material-toys/react";
import {
  AirplanemodeActiveIcon,
  OutlinedExploreIcon,
  OutlinedWorkIcon,
} from "@material-toys/icons-react";
import { BlockComponentCanvas } from "../../components/BlockComponentCanvas";
import { CodeBlock } from "../../components/CodeBlock";
import React from "react";
import classes from "./tabs.module.scss";
export default function tabs_page() {
  const sectionStyle = {
    width: "300px",
    marginBottom: "1.618rem",
    borderBottom: "1px solid #999",
  };
  return (
    <div className="container">
      <Head>
        <title>Material Toys - Tabs</title>
        <meta property="og:title" content="Tabs" key="title" />
        <meta name="description" content="Tabs page" key="desc" />
        <meta name="og:description" content="Tabs page" />
      </Head>
      <main>
        <h2>Tabs</h2>
        <div>
          <div>
            <div style={sectionStyle}>
              <h3>With icons</h3>
              <Tabs>
                <Tab icon={AirplanemodeActiveIcon}>Flights</Tab>
                <Tab icon={OutlinedWorkIcon}>Trips</Tab>
                <Tab icon={OutlinedExploreIcon}>Explore</Tab>
                <TabSection>
                  <div className={classes.tabContent}>First section here</div>
                </TabSection>
                <TabSection>
                  <div className={classes.tabContent}>Second section here</div>
                </TabSection>
                <TabSection>
                  <div className={classes.tabContent}>Third section here</div>
                </TabSection>
              </Tabs>
            </div>
            <div style={sectionStyle}>
              <h3>Fixed (touch enabled), with icons</h3>
              <p>The user can swipe the panels to change the selected tab</p>
              <Tabs fixed={true}>
                <Tab icon={AirplanemodeActiveIcon}>Flights</Tab>
                <Tab icon={OutlinedWorkIcon}>Trips</Tab>
                <Tab icon={OutlinedExploreIcon}>Explore</Tab>
                <TabSection>
                  <div className={`${classes.tabContent} ${classes.firstTab}`}>
                    First section here
                  </div>
                </TabSection>
                <TabSection>
                  <div className={`${classes.tabContent} ${classes.secondTab}`}>
                    Second section here
                  </div>
                </TabSection>
                <TabSection>
                  <div className={`${classes.tabContent} ${classes.thirdTab}`}>
                    Third section here
                  </div>
                </TabSection>
              </Tabs>
            </div>
            <div style={sectionStyle}>
              <h3>Without icons</h3>
              <Tabs>
                <Tab>Flights</Tab>
                <Tab>Trips</Tab>
                <Tab>Explore</Tab>
                <TabSection>
                  <div className={classes.tabContent}>First section here</div>
                </TabSection>
                <TabSection>
                  <div className={classes.tabContent}>Second section here</div>
                </TabSection>
                <TabSection>
                  <div className={classes.tabContent}>Third section here</div>
                </TabSection>
              </Tabs>
            </div>
            <div style={sectionStyle}>
              <h3>Secondary tabs</h3>
              <Tabs type="secondary">
                <Tab>Flights</Tab>
                <Tab>Trips</Tab>
                <Tab>Explore</Tab>
                <TabSection>
                  <div className={classes.tabContent}>First section here</div>
                </TabSection>
                <TabSection>
                  <div className={classes.tabContent}>Second section here</div>
                </TabSection>
                <TabSection>
                  <div className={classes.tabContent}>Third section here</div>
                </TabSection>
              </Tabs>
            </div>
          </div>
          <CodeBlock
            code={`...
<div style={sectionStyle}>
    <h3>With icons</h3>
    <Tabs>
      <Tab icon={AirplanemodeActiveIcon}>Flights</Tab>
      <Tab icon={OutlinedWorkIcon}>Trips</Tab>
      <Tab icon={OutlinedExploreIcon}>Explore</Tab>
      <TabSection>
        <div className={classes.tabContent}>First section here</div>
      </TabSection>
      <TabSection>
        <div className={classes.tabContent}>Second section here</div>
      </TabSection>
      <TabSection>
        <div className={classes.tabContent}>Third section here</div>
      </TabSection>
    </Tabs>
  </div>
  <div style={sectionStyle}>
    <h3>Fixed (touch enabled), with icons</h3>
    <p>The user can swipe the panels to change the selected tab</p>
    <Tabs fixed={true}>
      <Tab icon={AirplanemodeActiveIcon}>Flights</Tab>
      <Tab icon={OutlinedWorkIcon}>Trips</Tab>
      <Tab icon={OutlinedExploreIcon}>Explore</Tab>
      <TabSection>
        <div className={\`${classes.tabContent} ${classes.firstTab}\`}>
          First section here
        </div>
      </TabSection>
      <TabSection>
        <div className={\`${classes.tabContent} ${classes.secondTab}\`}>
          Second section here
        </div>
      </TabSection>
      <TabSection>
        <div className={\`${classes.tabContent} ${classes.thirdTab}\`}>
          Third section here
        </div>
      </TabSection>
    </Tabs>
  </div>
  <div style={sectionStyle}>
    <h3>Without icons</h3>
    <Tabs>
      <Tab>Flights</Tab>
      <Tab>Trips</Tab>
      <Tab>Explore</Tab>
      <TabSection>
        <div className={classes.tabContent}>First section here</div>
      </TabSection>
      <TabSection>
        <div className={classes.tabContent}>Second section here</div>
      </TabSection>
      <TabSection>
        <div className={classes.tabContent}>Third section here</div>
      </TabSection>
    </Tabs>
  </div>
  <div style={sectionStyle}>
    <h3>Secondary tabs</h3>
    <Tabs type="secondary">
      <Tab>Flights</Tab>
      <Tab>Trips</Tab>
      <Tab>Explore</Tab>
      <TabSection>
        <div className={classes.tabContent}>First section here</div>
      </TabSection>
      <TabSection>
        <div className={classes.tabContent}>Second section here</div>
      </TabSection>
      <TabSection>
        <div className={classes.tabContent}>Third section here</div>
      </TabSection>
    </Tabs>
  </div>
</div>
...
`}
          ></CodeBlock>
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
  );
}
