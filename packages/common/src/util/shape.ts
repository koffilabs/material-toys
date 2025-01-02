import { tokens_polyfill } from "../m3/default/polyfill";
const { MdSysShapeCornerFull } = tokens_polyfill;
interface CutShapeArgs {
  shape: string;
}

export const cutShape = ({ shape }: CutShapeArgs) => {
  const [topLeft, topRight, bottomRight, bottomLeft] = shape
    .split(" ")
    .map((n) => +n);
  const side = 100;
  const max = Math.max(topRight, topLeft, bottomLeft, bottomRight);
  const polygon = `polygon(${topLeft}px 0, calc(100% - ${topRight}px) 0, 100% ${topRight}px, 100% calc(100% - ${bottomRight}px), 
  calc(100% - ${bottomRight}px) 100%, ${bottomLeft}px 100%, 0 calc(100% - ${bottomLeft}px), 0 ${topLeft}px, ${topLeft}px 0)`;
  return {
    borderWidth: 0,
    borderRadius: 0,
    borderStyle: "solid",
    clipPath:
      shape !== MdSysShapeCornerFull
        ? polygon
        : new Function(
            "{ width, height }",
            "const min = Math.min(width, height) / 2; " +
              "return `polygon(${min}px 0, calc(100% - ${min}px) 0, 100% ${min}px, 100% calc(100% - ${min}px), " +
              "calc(100% - ${min}px) 100%, ${min}px 100%, 0 calc(100% - ${min}px), 0 ${min}px, ${min}px 0)`",
          ),
  };
};

interface RoundedShapeArgs {
  shape: string;
}

export const roundedShape = ({ shape }: RoundedShapeArgs) =>
  `${shape.split(" ").join("px ")}px`;
