import {fireEvent, render, screen} from "@testing-library/react";
import {MT} from "./MT";
import React from "react";
import {FilledTextField} from "./FilledTextField";

describe("@material/toys/react FilledTextField component isolated unit tests suite", () => {
  describe("event handlers", () => {
    for (const {eventName, action, event} of [
      {eventName: "onInput", action: "input"},
      {eventName: "onChange", action: "change", event: {target: {value: 42}}},
      {eventName: "onFocus", action: "focus"},
      {eventName: "onBlur", action: "blur"},
      {eventName: "onClick", action: "click"},
      {eventName: "onMouseDown", action: "mouseDown"},
      {eventName: "onMouseOver", action: "mouseOver"},
      {eventName: "onMouseUp", action: "mouseUp"},
      {eventName: "onMouseOut", action: "mouseOut"},
    ]) {
      it(`should execute the ${eventName} handler`, () => {
        const handler = jest.fn();
        render(<MT><FilledTextField label="a simple text" {...{[eventName]: handler}} /></MT>);
        (fireEvent as any)[action](screen.getByRole("textbox"), event ?? {});
        expect(handler).toHaveBeenCalled();
      });
    }
    it(`should execute the onChange handler`, () => {
      const handler = jest.fn();
      render(<MT><FilledTextField label="a simple text" {...{["onChange"]: handler}} /></MT>);
      (fireEvent as any)["change"](screen.getByRole("textbox"), {target: {value: 42}});
      expect(handler).toHaveBeenCalled();
    });
  })

});
