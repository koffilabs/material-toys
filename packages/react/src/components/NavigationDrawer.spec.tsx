import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { NavigationItem } from "./NavigationItem";
import { NavigationDrawer } from "./NavigationDrawer";
import "emotion-rgba";
import "@testing-library/jest-dom";
jest.mock("emotion-rgba");

describe("NavigationDrawer isolated unit tests suite", () => {
  it("should render the items", () => {
    const { getByText } = render(
      <NavigationDrawer>
        <NavigationItem>Hello</NavigationItem>
      </NavigationDrawer>
    );
    expect(getByText("Hello")).toBeInTheDocument();
  });
  it("should select the first menu item", () => {
    const { container } = render(
      <NavigationDrawer activeItem={0}>
        <NavigationItem>Hello</NavigationItem>
        <NavigationItem>World</NavigationItem>
      </NavigationDrawer>
    );
    const activeNode = container.querySelector("[data-active=true]");
    expect(activeNode).toBeInTheDocument();
    expect(activeNode?.textContent).toBe("Hello");
  });
  it("should select the second menu item", () => {
    const { container } = render(
      <NavigationDrawer activeItem={1}>
        <NavigationItem>Hello</NavigationItem>
        <NavigationItem>World</NavigationItem>
      </NavigationDrawer>
    );
    const activeNode = container.querySelector("[data-active=true]");
    expect(activeNode).toBeInTheDocument();
    expect(activeNode?.textContent).toBe("World");
  });
});
