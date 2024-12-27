import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Checkbox } from "./Checkbox";
import { MT } from "./MT";
import userEvent from "@testing-library/user-event";

describe("@material/toys/react Checkbox component isolated unit tests suite", () => {
  it("should check the checkbox", () => {
    render(
      <MT>
        <Checkbox data-testid="checkbox" />
      </MT>,
    );
    expect(screen.getByRole("checkbox") as HTMLInputElement).not.toBeChecked();
    fireEvent.click(screen.getByTestId("checkbox"));
    expect(screen.getByRole("checkbox") as HTMLInputElement).toBeChecked();
  });
  it("should NOT check the checkbox when it's disabled", () => {
    render(
      <MT>
        <Checkbox disabled={true} data-testid="checkbox" />
      </MT>,
    );
    expect(screen.getByRole("checkbox") as HTMLInputElement).not.toBeChecked();
    // see https://github.com/testing-library/dom-testing-library/issues/92
    userEvent.click(screen.getByTestId("checkbox"));
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
            <Checkbox data-testid="checkbox" {...{ [eventName]: handler }} />
          </MT>,
        );
        (fireEvent as any)[action](screen.getByTestId("checkbox"), {});
        expect(handler).toHaveBeenCalled();
      });
    }
  });
});
