interface Breakpoint {
  query: string;
  prefix: string;
}
interface Breakpoints {
  EXTRA_SMALL: Breakpoint;
  SMALL_FLUID: Breakpoint;
  SMALL: Breakpoint;
  MEDIUM: Breakpoint;
  LARGE: Breakpoint;
}
export const breakpoints: Breakpoints = {
  // phone
  EXTRA_SMALL: { query: "@media(min-width: 0)", prefix: "" },
  // tablet
  SMALL: { query: "@media(min-width: 600px)", prefix: "sm-" },
  SMALL_FLUID: { query: "@media(min-width: 905px)", prefix: "smf-" },
  // laptop
  MEDIUM: { query: "@media(min-width: 1240px)", prefix: "md-" },
  // desktop
  LARGE: { query: "@media(min-width: 1440px)", prefix: "lg-" },
};
