import {generateCutShape} from "../../util/shape";
import {rgba} from "../../util/rgba";
import {material_tokens} from "../../main";

interface CutButtonArgs {
  shape: string;
  fill: string;
  stateFill: string;
  color?: string;
  stroke?: string;
}

export const cutElevatedButton = ({
                                    shape, fill, stroke, stateFill
                                  }: CutButtonArgs) => ({
  "&.elevated": {
    filter: `drop-shadow(0 2px 1px ${rgba(material_tokens.MdSysColorShadow, .4)})`,
    "& .mt-shape": {
      boxShadow: "none",
      backgroundColor: "transparent",
      ...generateCutShape({
        shape,
        fill,
      }),
    },
    "&:active, &:focus": {
      "& .mt-shape": {
        boxShadow: "none",
      },
      "& .state": {
        backgroundColor: "transparent",
      },

    },
    "&:hover:not(:disabled)": {
      "& .mt-shape": {
        boxShadow: "none",
        backgroundColor: "transparent",
        "& .state": {
          backgroundColor: "transparent",
        },
      },
      // filter: `drop-shadow(0 2px 1px ${rgba(tokens.MdSysColorShadow, .4)})`,
    },
    "& .state": {
      ...generateCutShape({
        shape,
        fill: stateFill
      })
    },
  }
});
export const cutFilledButton = ({
                                    shape, fill, stroke, stateFill, color = "#fff"
                                  }: CutButtonArgs) => ({
  "&.filled": {
    color,
    transition: "filter .1s ease-in-out",
    filter: `drop-shadow(0 0px 0px ${rgba(material_tokens.MdSysColorShadow, .4)})`,
    "& .mt-shape": {
      ...generateCutShape({shape, fill}),
    },

    "&:hover:not(:disabled)": {
      filter: `drop-shadow(0 2px 1px ${rgba(material_tokens.MdSysColorShadow, .4)})`,
      "& .mt-shape": {
        boxShadow: "none",
      },
    },
    "& .state": {
      ...generateCutShape({shape, fill: stateFill})
    },
  },
});
export const cutFilledTonalButton = ({
                                  shape, fill, stroke, stateFill, color = "#fff"
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
      ...generateCutShape({
        shape,
        fill
      }),
    },
    "& .state": {
      ...generateCutShape({shape, fill })
    },

  },

});