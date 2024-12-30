import { fireEvent, render, screen } from "@testing-library/react";
import { MT } from "./MT";
import React, { useRef } from "react";
import { FilledTextField } from "./FilledTextField";

// @ts-ignore
import userEvent from "@testing-library/user-event";

describe("@material/toys/react FilledTextField component isolated unit tests suite", () => {
  it("should apply the maxLength attribute", async () => {
    const user = userEvent.setup();

    render(
      <MT>
        <FilledTextField maxLength={3} label="text" />
      </MT>,
    );
    const textbox = screen.getByRole("textbox");
    await user.type(textbox, "abcde", {
      skipClick: false,
    });
    expect(textbox).toHaveValue("abc");
  });
  it("should not write in a disabled field", async () => {
    const user = userEvent.setup();

    render(
      <MT>
        <FilledTextField disabled label="text" />
      </MT>,
    );
    const textbox = screen.getByRole("textbox");

    await user.type(textbox, "abcde", {
      skipClick: false,
    });
    expect(textbox).toHaveValue("");
  });
  it("should not write in a readonly field", async () => {
    const user = userEvent.setup();

    render(
      <MT>
        <FilledTextField readOnly={true} label="text" />
      </MT>,
    );
    const textbox = screen.getByRole("textbox");

    await user.type(textbox, "abcde", {
      skipClick: false,
    });
    expect(textbox).toHaveValue("");
  });
  describe("event handlers", () => {
    for (const { eventName, action, event } of [
      { eventName: "onInput", action: "input" },
      {
        eventName: "onChange",
        action: "change",
        event: { target: { value: 42 } },
      },
      { eventName: "onFocus", action: "focus" },
      { eventName: "onBlur", action: "blur" },
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
            <FilledTextField
              label="a simple text"
              {...{ [eventName]: handler }}
            />
          </MT>,
        );
        (fireEvent as any)[action](screen.getByRole("textbox"), event ?? {});
        expect(handler).toHaveBeenCalled();
      });
    }
    it(`should execute the onChange handler`, () => {
      const handler = jest.fn();
      render(
        <MT>
          <FilledTextField
            label="a simple text"
            {...{ ["onChange"]: handler }}
          />
        </MT>,
      );
      (fireEvent as any)["change"](screen.getByRole("textbox"), {
        target: { value: 42 },
      });
      expect(handler).toHaveBeenCalled();
    });
  });
});
