import React, {
  cloneElement,
  FC,
  ReactElement,
  ReactNode,
  SyntheticEvent,
  useEffect,
} from "react";
import { useRipple } from "@material-yue/common";

interface RippleProps {
}
export const Ripple = ({ children } : RippleProps, context) : JSX.Element => {
  const reactNode: ReactNode = children;
  const { ripple, rippleOut } = useRipple();

  const onPointerDown = (event: SyntheticEvent) => {
    ripple({ event: event.nativeEvent, element: event.currentTarget });
  };
  const onPointerLeave = () => {
    rippleOut();
  };
  useEffect(() => {
    // reactNode.addEventListener()
  }, []);
  return (
    <>
      {cloneElement(reactNode, {
        onPointerDown,
        onPointerLeave,
        onPointerUp: onPointerLeave,
      })}
    </>
  );
};
