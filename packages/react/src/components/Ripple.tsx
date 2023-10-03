import React, {
  cloneElement,
  Context,
  ReactElement,
  ReactNode,
  SyntheticEvent,
} from "react";
import { ripple } from "@material-toys/common";

interface RippleProps {
  children?: ReactNode;
}
export const Ripple = (
  { children }: RippleProps,
  context: Context<any>
): JSX.Element => {
  const reactNode: ReactNode = children;
  // const { ripple, rippleOut, setPointerIn } = createRipple();
  const onPointerDown = (event: SyntheticEvent) => {
    const target = event.nativeEvent.target as HTMLElement;
    if (target?.closest("[disabled]")) {
      return;
    }
    ripple({
      event: event.nativeEvent as PointerEvent,
      element: (event.currentTarget.querySelector(".mt-shape") ||
        event.currentTarget) as HTMLElement,
    });
  };
  return (
    <>
      {cloneElement(reactNode as ReactElement<any>, {
        onPointerDown,
      })}
    </>
  );
};
