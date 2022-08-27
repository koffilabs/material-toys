import React, {
  cloneElement,
  Context,
  ReactElement,
  ReactNode,
  SyntheticEvent,
} from "react";
import { useRipple } from "@material-toys/common";

interface RippleProps {
  children?: ReactNode;
}
export const Ripple = (
  { children }: RippleProps,
  context: Context<any>
): JSX.Element => {
  const reactNode: ReactNode = children;
  const { ripple, rippleOut } = useRipple();
  const onPointerDown = (event: SyntheticEvent) => {
    const target = event.nativeEvent.target as HTMLElement;
    if(target?.closest("[disabled]")){
      return
    }
    ripple({
      event: event.nativeEvent as PointerEvent,
      element: event.currentTarget as HTMLElement,
    });
  };
  const onPointerLeave = () => {
    rippleOut();
  };
  return (
    <>
      {cloneElement(reactNode as ReactElement<any>, {
        onPointerDown,
        onPointerLeave,
        onPointerUp: onPointerLeave,
      })}
    </>
  );
};
