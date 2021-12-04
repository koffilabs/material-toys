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
  color: string;
  // children: Array<ReactElement>;
}
export const Ripple: FC<RippleProps> = ({ color, children }, context) => {
  const reactNode: ReactNode = children;
  const { ripple, rippleOut } = useRipple();

  const onMouseDown = (event: SyntheticEvent) => {
    ripple({ event: event.nativeEvent, element: event.currentTarget, color });
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
