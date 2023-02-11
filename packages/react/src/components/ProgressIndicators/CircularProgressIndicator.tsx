import React, { useEffect, useRef } from "react";
import { useComponentClass } from "../../hooks/useComponentClass";

interface CircularProgressIndicatorProps {
  value: number;
  max?: number;
  indeterminate?: boolean;
}
export const CircularProgressIndicator = ({
  value,
  max = 100,
  indeterminate = false,
}: CircularProgressIndicatorProps) => {
  const { className: circularProgressClass } = useComponentClass({
    path: "components.CircularProgressIndicator",
  });
  const progress = `${Math.min(value, max ?? 100)}`;
  const indicatorRef = useRef<SVGCircleElement | undefined>();
  const animation = useRef<Animation>();
  useEffect(() => {
    if (indeterminate) {
      // start the animation
      animation.current = indicatorRef?.current?.animate(
        [
          {
            strokeDasharray: "100 100",
            strokeDashoffset: "100",
            transform: "rotate(-90deg)",
          },
          {
            strokeDasharray: "100 100",
            strokeDashoffset: "-100",
            transform: "rotate(270deg)",
          },
        ],
        {
          duration: 1200,
          iterations: Infinity,
          fill: "none",
        }
      );
    } else {
      animation?.current?.cancel();
    }
  }, [indeterminate]);
  return (
    <div className={circularProgressClass}>
      <svg viewBox={"0 0 48 48"}>
        <circle
          className={"mt-circular-progress-track"}
          cx={"24"}
          cy={"24"}
          r={"17"}
        ></circle>
        <circle
          ref={indicatorRef}
          className={`mt-circular-progress-indicator${
            indeterminate ? " indeterminate" : ""
          }`}
          cx={"24"}
          cy={"24"}
          r={"17"}
          strokeDasharray={
            !indeterminate ? `${progress} ${max - progress}` : ""
          }
          strokeDashoffset={"0"}
          pathLength={100}
        ></circle>
      </svg>
    </div>
  );
  // return <div className={circularProgressClass}></div>;
};
