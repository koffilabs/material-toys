import React, { ReactNode } from "react";
import { Ripple } from "./Ripple";
import { css } from "@emotion/css";

interface RippleIconProps {
  // TODO: use the right type instead
  icon: any;
}
export const RippleIcon = ({ icon: Icon }: RippleIconProps) => {
  const rippleIconClassName = css({
    cursor: "pointer",
    display: "inline-block",
    ".state": {
      background: "white",
    },
  });
  return (
    // FIXME Ripple
    <div className={rippleIconClassName}>
      <Ripple>
        <div className="state">
          <Icon />
        </div>
      </Ripple>
    </div>
  );
};
