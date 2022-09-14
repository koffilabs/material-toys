import React from "react";
import {fireEvent, render, screen} from '@testing-library/react'
import {Button} from "./Button";
import {MT} from "./MT";
import '@testing-library/jest-dom/extend-expect';

describe("@material/toys/react Button component isolated unit tests suite", () => {
  it("should render the text", () => {
    render(<MT><Button>The answer is 42</Button></MT>);
    expect(screen.getByRole("button")).toHaveTextContent("The answer is 42");
  });
  describe("event handlers sub suite", () => {
    for (const {eventName, action} of [
      {eventName: "onClick", action: "click"},
      {eventName: "onMouseDown", action: "mouseDown"},
      {eventName: "onMouseOver", action: "mouseOver"},
      {eventName: "onMouseUp", action: "mouseUp"},
      {eventName: "onMouseOut", action: "mouseOut"},
    ]) {
      it(`should execute the ${eventName} handler`, () => {
        const handler = jest.fn();
        render(<MT><Button {...{[eventName]: handler}}>Hello</Button></MT>);
        (fireEvent as any)[action](screen.getByText("Hello"), {});
        expect(handler).toHaveBeenCalled();
      });
    }
  })
})