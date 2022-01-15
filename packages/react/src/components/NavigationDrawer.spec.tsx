import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { NavigationItem } from "./NavigationItem";
import { NavigationDrawer } from "./NavigationDrawer";
import "emotion-rgba";
import "@testing-library/jest-dom";
jest.mock("emotion-rgba");

describe("NavigationDrawer isolated unit tests suite", () => {
  it("should render the items", () => {
    const { getAllByText } = render(
      <NavigationDrawer>
        <NavigationItem>Hello</NavigationItem>
      </NavigationDrawer>
    );
    for (let node of getAllByText("Hello")) {
      expect(node).toBeInTheDocument();
    }
  });
  it("should not have an active item", () => {
    const { container } = render(
      <NavigationDrawer>
        <NavigationItem>Hello</NavigationItem>
        <NavigationItem>World</NavigationItem>
      </NavigationDrawer>
    );
    const activeNode = container.querySelector("[data-active=true]");
    expect(activeNode).toBeFalsy();
  });
  it("should select the first menu item (activeItem attribute)", () => {
    const { container } = render(
      <NavigationDrawer activeItem={0}>
        <NavigationItem>Hello</NavigationItem>
        <NavigationItem>World</NavigationItem>
      </NavigationDrawer>
    );
    const activeNode = container.querySelector("[data-active=true] .children");
    expect(activeNode).toBeInTheDocument();
    expect(activeNode?.textContent).toBe("Hello");
  });
  it("should select the second menu item (activeItem attribute)", () => {
    const { container } = render(
      <NavigationDrawer activeItem={1}>
        <NavigationItem>Hello</NavigationItem>
        <NavigationItem>World</NavigationItem>
      </NavigationDrawer>
    );
    const activeNode = container.querySelector("[data-active=true] .children");
    expect(activeNode).toBeInTheDocument();
    expect(activeNode?.textContent).toBe("World");
  });
  it("should select the second menu item using click", () => {
    const { getAllByText, container } = render(
      <NavigationDrawer activeItem={0}>
        <NavigationItem>Hello</NavigationItem>
        <NavigationItem>World</NavigationItem>
      </NavigationDrawer>
    );
    fireEvent.click(getAllByText("World")[0], {});
    const activeNode = container.querySelector("[data-active=true] .children");
    expect(activeNode).toBeInTheDocument();
    expect(activeNode?.textContent).toBe("World");
  });
  it("should select the second menu item using click, when there is no active item", () => {
    const { getAllByText, container } = render(
      <NavigationDrawer>
        <NavigationItem>Hello</NavigationItem>
        <NavigationItem>World</NavigationItem>
      </NavigationDrawer>
    );
    fireEvent.click(getAllByText("World")[0], {});
    const activeNode = container.querySelector("[data-active=true] .children");
    expect(activeNode).toBeInTheDocument();
    expect(activeNode?.textContent).toBe("World");
  });
  it("should call the onClick handler", () => {
    const onClick = jest.fn();
    const { getAllByText, container } = render(
      <NavigationDrawer>
        <NavigationItem>Hello</NavigationItem>
        <NavigationItem onClick={onClick}>World</NavigationItem>
      </NavigationDrawer>
    );
    fireEvent.click(getAllByText("World")[0], {});
    expect(onClick).toHaveBeenCalled();
  });
});
