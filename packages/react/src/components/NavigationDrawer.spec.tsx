import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { NavigationItem } from "./NavigationItem";
import { NavigationDrawer } from "./NavigationDrawer";
// import "emotion-rgba";
import "@testing-library/jest-dom";
// jest.mock("emotion-rgba");
import { MT } from "./MT";

describe("NavigationDrawer isolated unit tests suite", () => {
  it("should render the items", () => {
    const { getAllByText } = render(
      <MT>
        <NavigationDrawer>
          <NavigationItem>Hello</NavigationItem>
        </NavigationDrawer>
      </MT>,
    );
    for (let node of screen.getAllByText("Hello")) {
      expect(node).toBeInTheDocument();
    }
  });
  it("should not have an active item", () => {
    const { container } = render(
      <MT>
        <NavigationDrawer>
          <NavigationItem>Hello</NavigationItem>
          <NavigationItem>World</NavigationItem>
        </NavigationDrawer>
      </MT>,
    );
    const activeNode = container.querySelector("[data-active=true]");
    expect(activeNode).toBeFalsy();
  });
  it("should select the first menu item (activeItem attribute)", () => {
    const { container } = render(
      <MT>
        <NavigationDrawer>
          <NavigationItem active>Hello</NavigationItem>
          <NavigationItem>World</NavigationItem>
        </NavigationDrawer>
      </MT>,
    );
    const activeNode = container.querySelector("[data-active=true] .children");
    expect(activeNode).toBeInTheDocument();
    expect(activeNode?.textContent).toBe("Hello");
  });
  it("should select the second menu item (activeItem attribute)", () => {
    const { container } = render(
      <MT>
        <NavigationDrawer>
          <NavigationItem>Hello</NavigationItem>
          <NavigationItem active>World</NavigationItem>
        </NavigationDrawer>
      </MT>,
    );
    const activeNode = container.querySelector("[data-active=true] .children");
    expect(activeNode).toBeInTheDocument();
    expect(activeNode?.textContent).toBe("World");
  });

  it("should call the onClick handler", () => {
    const onClick = jest.fn();
    const { getAllByText, container } = render(
      <MT>
        <NavigationDrawer>
          <NavigationItem>Hello</NavigationItem>
          <NavigationItem onClick={onClick}>World</NavigationItem>
        </NavigationDrawer>
      </MT>,
    );
    fireEvent.click(getAllByText("World")[1], {});
    expect(onClick).toHaveBeenCalled();
  });
});
