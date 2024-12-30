import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { IconButton } from "./IconButton";
import { MT } from "./MT";
import {
  FavoriteIcon,
  OutlinedFavoriteBorderIcon,
} from "@material-toys/icons-react";

describe("@material/toys/react Icon Button component isolated unit tests suite", () => {
  it("should render renderIcon function", () => {
    render(
      <MT>
        <IconButton renderIcon={() => <>The answer is 42</>}></IconButton>
      </MT>,
    );
    expect(screen.getByRole("button")).toHaveTextContent("The answer is 42");
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
            <IconButton
              {...{ [eventName]: handler }}
              data-testid="target"
              renderIcon={() => <>Hello</>}
            ></IconButton>
          </MT>,
        );
        (fireEvent as any)[action](screen.getByTestId("target"), {});
        expect(handler).toHaveBeenCalled();
      });
    }
  });
});
