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

  const onMouseDown = (event: SyntheticEvent) => {
    ripple({ event: event.nativeEvent, element: event.currentTarget });
  };
  const onMouseLeave = () => {
    rippleOut();
  };
  useEffect(() => {
    // reactNode.addEventListener()
  }, []);
  return (
    <>
      {cloneElement(reactNode, {
        onMouseDown,
        onMouseLeave,
        onMouseUp: onMouseLeave,
      })}
    </>
  );
};
