import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { MT } from "./MT";
import userEvent from "@testing-library/user-event";
import { Switch } from "./Switch";
import { CheckIcon } from "@material-toys/icons-react";

describe("@material/toys/react Switch component isolated unit tests suite", () => {
  it("should select the switch", () => {
    render(
      <MT>
        <Switch data-testid="switch" />
      </MT>,
    );
    expect(screen.getByRole("checkbox") as HTMLInputElement).not.toBeChecked();
    fireEvent.click(screen.getByTestId("switch"));
    expect(screen.getByRole("checkbox") as HTMLInputElement).toBeChecked();
  });
  it("should render the selected icon", () => {
    render(
      <MT>
        <Switch selectedIcon={CheckIcon} data-testid="switch" />
      </MT>,
    );
    expect(screen.getByRole("checkbox") as HTMLInputElement).not.toBeChecked();
    expect(document.querySelectorAll("svg").length).toBe(1);
  });
  it("should render the selected and the unselected icons", () => {
    render(
      <MT>
        <Switch
          selectedIcon={CheckIcon}
          unselectedIcon={CheckIcon}
          data-testid="switch"
        />
      </MT>,
    );
    expect(screen.getByRole("checkbox") as HTMLInputElement).not.toBeChecked();
    expect(document.querySelectorAll("svg").length).toBe(2);
  });
  it("should NOT select the switch when it's disabled", () => {
    render(
      <MT>
        <Switch disabled={true} data-testid="switch" />
      </MT>,
    );
    expect(screen.getByRole("checkbox") as HTMLInputElement).not.toBeChecked();
    // see https://github.com/testing-library/dom-testing-library/issues/92
    userEvent.click(screen.getByTestId("switch"));
    expect(screen.getByRole("checkbox") as HTMLInputElement).not.toBeChecked();
  });
  describe("event handlers sub suite", () => {
    for (const { eventName, action } of [
      { eventName: "onClick", action: "click" },
      { eventName: "onMouseDown", action: "mouseDown" },
      { eventName: "onMouseOver", action: "mouseOver" },
      { eventName: "onMouseUp", action: "mouseUp" },
      { eventName: "onMouseOut", action: "mouseOut" },
    ]) {
      it(`should execute the ${eventName} handler`, () => {
        const handler = jest.fn();
        render(
          <MT>
            <Switch data-testid="switch" {...{ [eventName]: handler }} />
          </MT>,
        );
        (fireEvent as any)[action](screen.getByTestId("switch"), {});
        expect(handler).toHaveBeenCalled();
      });
    }
  });
});
