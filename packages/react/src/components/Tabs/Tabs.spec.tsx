import { render, screen } from "@testing-library/react";
import React, { useCallback } from "react";
import { MT } from "../MT";
import { Tabs } from "./Tabs";
import { Tab } from "./Tab";
import { TabSection } from "./TabSection";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

beforeAll(() => {
  // @ts-ignore
  Element.prototype.animate = (
    keyframes: Keyframe[] | PropertyIndexedKeyframes | null,
    options?: number | KeyframeAnimationOptions | undefined
  ) => {
    return {
      pause() {},
      commitStyles() {},
      play() {},
      cancel() {},
      addEventListener() {},
    };
  };
});
describe("@material/toys/react Tabs component isolated unit tests suite", () => {
  it("should start with the first tab selected", () => {
    render(
      <MT>
        <Tabs>
          <Tab>First</Tab>
          <Tab>Second</Tab>
          <TabSection>42</TabSection>
          <TabSection>Should not be selected</TabSection>
        </Tabs>
      </MT>
    );
    expect(screen.getByText("42")).toBeInTheDocument();
    expect(screen.queryByText("Should not be selected")).toBe(null);
  });
  it("should change to the second tab", async () => {
    const user = userEvent.setup();
    render(
      <MT>
        <Tabs>
          <Tab>First</Tab>
          <Tab>Second</Tab>
          <TabSection>Should not be selected</TabSection>
          <TabSection>42</TabSection>
        </Tabs>
      </MT>
    );
    await user.click(screen.getByText("Second"));
    expect(screen.queryByText("Should not be selected")).toBe(null);
    expect(screen.getByText("42")).toBeInTheDocument();
  });
  it("all the tabs should be rendered when fixed=true", () => {
    render(
      <MT>
        <Tabs fixed={true}>
          <Tab>First</Tab>
          <Tab>Second</Tab>
          <TabSection>42</TabSection>
          <TabSection>Hello World!</TabSection>
        </Tabs>
      </MT>
    );
    expect(screen.getByText("42")).toBeInTheDocument();
    expect(screen.getByText("Hello World!")).toBeInTheDocument();
  });
});
