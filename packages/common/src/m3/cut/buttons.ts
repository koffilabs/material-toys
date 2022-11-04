import {cutShape} from "../../util/shape";
import {rgba} from "../../util/rgba";
import * as tokens from "../default/tokens";
import * as polyfill  from "../default/polyfill";
const material_tokens = {...tokens, ...polyfill}
interface CutButtonArgs {
  shape: string;
}

export const cutElevatedButton = ({
                                    shape
                                  }: CutButtonArgs) => ({
  "&.elevated": {
    filter: `drop-shadow(0 2px 1px ${rgba(material_tokens.MdSysColorShadow, .4)})`,
    "& .mt-shape": {
      boxShadow: "none",
      ...cutShape({
        shape,
      }),
    },
    "&:active, &:focus": {
      "& .mt-shape": {
        boxShadow: "none",
      },
      "& .state": {
      },

    },
    "&:hover:not(:disabled)": {
      "& .mt-shape": {
        boxShadow: "none",
        "& .state": {
        },
      },
    },
    "& .state": {
    },
  }
});
export const cutFilledButton = ({
                                    shape
                                  }: CutButtonArgs) => ({
  "&.filled": {
    transition: "filter .1s ease-in-out",
    filter: `drop-shadow(0 0px 0px ${rgba(material_tokens.MdSysColorShadow, .4)})`,
    "& .mt-shape": {
      ...cutShape({shape}),
    },

    "&:hover:not(:disabled)": {
      filter: `drop-shadow(0 2px 1px ${rgba(material_tokens.MdSysColorShadow, .4)})`,
      "& .mt-shape": {
        boxShadow: "none",
      },
    },
  },
});
export const cutFilledTonalButton = ({
                                  shape
                                }: CutButtonArgs) => ({
  "&.filled-tonal": {
    border: "none",
    backgroundColor: "transparent",
    transition: "filter .1s ease-in-out",
    filter: `drop-shadow(0 0px 0px ${rgba(material_tokens.MdSysColorShadow, .4)})`,

    "&:hover:not(:disabled)": {
      filter: `drop-shadow(0 2px 1px ${rgba(material_tokens.MdSysColorShadow, .4)})`,
      "& .mt-shape": {
        boxShadow: "none",
      },
    },
    ".mt-shape": {
      ...cutShape({
        shape,
      }),
    },
  },

});