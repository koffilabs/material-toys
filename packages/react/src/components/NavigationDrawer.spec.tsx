import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { NavigationItem } from "./NavigationItem";
import { NavigationDrawer } from "./NavigationDrawer";
import "emotion-rgba";
import "@testing-library/jest-dom";
jest.mock("emotion-rgba");

describe("NavigationDrawer isolated unit tests suite", () => {
  it("should render the items", () => {
    // expect(42).toBe(42);
    const { getByText } = render(
      <NavigationDrawer>
        <NavigationItem>Hello</NavigationItem>
      </NavigationDrawer>
    );
    expect(getByText("Hello")).toBeInTheDocument();
  });
  // it("should select the right menu item", () => {});
});
