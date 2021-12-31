import React, {
  cloneElement,
  FC,
  ReactElement,
  ReactNode,
  SyntheticEvent,
  useEffect,
} from "react";
import { useRipple } from "@material-yue/common";

interface RippleProps {}
export const Ripple: FC<RippleProps> = ({ children }, context): JSX.Element => {
  const reactNode: ReactNode = children;
  const { ripple, rippleOut } = useRipple();

  const onPointerDown = (event: SyntheticEvent) => {
    ripple({
      event: event.nativeEvent as PointerEvent,
      element: event.currentTarget as HTMLElement,
    });
  };
  const onPointerLeave = () => {
    rippleOut();
  };
  useEffect(() => {
    // reactNode.addEventListener()
  }, []);
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
