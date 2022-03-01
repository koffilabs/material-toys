import React, { ReactNode } from "react";
import { Ripple } from "./Ripple";
import { css } from "@emotion/css";

interface RippleIconProps {
  // TODO: use the right type instead
  icon: ReactNode;
}
export const RippleIcon = ({ icon }: RippleIconProps) => {
  const rippleIconClassName = css({
    cursor: "pointer",
    display: "inline-block",
    ".state": {
      background: "transparent",
    },
  });
  return (
    // FIXME Ripple
    <div className={rippleIconClassName}>
      <Ripple>
        <div className="state">{icon}</div>
      </Ripple>
    </div>
  );
};
