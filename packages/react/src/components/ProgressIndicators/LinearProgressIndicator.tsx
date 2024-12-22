"use client";
import React, { useEffect, useRef } from "react";
import { useComponentClass } from "../../hooks/useComponentClass";
interface LinearProgressIndicatorProps {
  width?: string;
  value: number;
  max?: number;
  indeterminate?: boolean;
}
export const LinearProgressIndicator = ({
  width = "100%",
  value = 0,
  max = 100,
  indeterminate = false,
}: LinearProgressIndicatorProps) => {
  const { className: linearProgressClass } = useComponentClass({
    path: "components.LinearProgressIndicator",
  });
  // const progress = `${(100 * Math.min(value, max ?? 100)) / max}%`;
  const progress = `${Math.min(value, max ?? 100)}`;
  const indicatorRef = useRef<SVGLineElement | undefined>();
  const animation = useRef<Animation>();
  useEffect(() => {
    if (indeterminate) {
      // start the animation
      animation.current = indicatorRef?.current?.animate(
        [
          {
            strokeDasharray: "100 100",
            strokeDashoffset: "0",
          },
          {
            strokeDasharray: "30 70",
            strokeDashoffset: "-100",
          },
          {
            strokeDasharray: "100 100",
            strokeDashoffset: "-200",
          },
        ],
        {
          duration: 1200,
          easing: "ease-in-out",
          iterations: Infinity,
          fill: "none",
        }
      );
    } else {
      animation?.current?.cancel();
    }
  }, [indeterminate]);

  return (
    <div className={linearProgressClass} style={{ width: width ?? "100%" }}>
      <svg viewBox={"0 0 100 4"}>
        <line
          className={"mt-linear-progress-track"}
          x1={"0"}
          y1={"0"}
          x2={"99"}
          y2={"0"}
          pathLength={100}
        ></line>
        <line
          className={"mt-linear-progress-indicator"}
          ref={indicatorRef}
          x1={"0"}
          y1={"0"}
          x2={"99"}
          y2={"0"}
          strokeDasharray={
            !indeterminate ? `${progress} ${max - progress}` : ""
          }
          pathLength={100}
        ></line>
      </svg>

      <div className="mt-track">
        <div className="mt-indicator" style={{ width: progress }}></div>
      </div>
    </div>
  );
};
