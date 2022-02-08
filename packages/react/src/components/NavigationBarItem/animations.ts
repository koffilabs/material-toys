export const slideDown = {
  icon: [{ transform: "translateY(0)" }, { transform: "translateY(24px)" }],
  activeIcon: [
    { transform: "translateY(-24px)", opacity: "1" },
    { transform: "translateY(0)", opacity: "1" },
  ],
};
export const zoomIn = {
  icon: [{ transform: "scale(1)" }, { transform: "scale(0)" }],
  activeIcon: [
    { transform: "scale(0)", opacity: "1" },
    { transform: "scale(1)", opacity: "1" },
  ],
};
export const fadeIn = {
  icon: [{ opacity: "1" }, { opacity: "0" }],
  activeIcon: [{ opacity: "0" }, { opacity: "1" }],
};
export const circleReveal = {
  icon: [],
  activeIcon: [
    {
      zIndex: "1",
      opacity: "1",
      clipPath: "circle(0)",
    },
    {
      zIndex: "1",
      opacity: "1",
      clipPath: "circle(100%)",
    },
  ],
};
export const rectReveal = {
  icon: [],
  activeIcon: [
    {
      zIndex: "1",
      opacity: "1",
      clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0 100%)",
    },
    {
      zIndex: "1",
      opacity: "1",
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0 100%)",
    },
  ],
};
