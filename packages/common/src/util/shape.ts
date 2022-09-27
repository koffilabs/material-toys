import {MdSysShapeCornerFull} from "../m3/default/polyfill";

interface CutShapeArgs {
  shape: string;
  fill: string;
  stroke?: string;
}

export const cutShape = ({shape, fill, stroke = "transparent"}: CutShapeArgs) => {
  const [topLeft, topRight, bottomRight, bottomLeft] = shape.split(" ").map(n => +n);
  const side = 100;
  const max = Math.max(topRight, topLeft, bottomLeft, bottomRight);
  let borderImage = `url('data:image/svg+xml;utf-8,<svg viewBox="0 0 ${side} ${side}" xmlns="http://www.w3.org/2000/svg" width="${side}" ` +
    `height="${side}"><path data-mt="${topLeft} ${topRight} ${bottomRight} ${bottomLeft}" stroke="${encodeURIComponent(stroke)}" fill="${encodeURIComponent(fill)}" d="M${topLeft},0h${side - topRight - topLeft}l${topRight},${topRight}v${side - topRight - bottomRight}l-${topRight},${bottomRight}h-${side - bottomLeft - topRight}l-${bottomLeft},-${bottomRight}v-${side - topLeft - bottomRight}z"/>` +
    `</svg>') ${max} fill / ${max}px;`;
  return {
    borderWidth: 0,
    borderRadius: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderImage: shape !== MdSysShapeCornerFull ? borderImage : new Function(
      "{ width, height }",
      "const min = Math.min(width, height) / 2, side = Math.max(width, height); return `url('data:image/svg+xml;utf-8,<svg viewBox=\"0 0 ${side} ${side}\" xmlns=\"http://www.w3.org/2000/svg\" width=\"${side}\" ` +\n" +
      "    `height=\"${side}\"><path data-mt=\"${min} ${min} ${min} ${min}\" stroke=\""+encodeURIComponent(stroke)+"\" fill=\""+encodeURIComponent(fill)+"\" d=\"M${min},0h${side - 2*min}l${min},${min}v${side - 2*min}l-${min},${min}h-${side - 2*min}l-${min},-${min}v-${side - 2*min}z\"/>` +\n" +
      "    `</svg>') ${min} fill / ${min}px;`"
    )
  };
};

interface RoundedShapeArgs {
  shape: string;
}

export const roundedShape = ({shape}: RoundedShapeArgs) => shape !== MdSysShapeCornerFull
  ?
  `${shape.split(" ").join("px ")}px`
  : new Function(
    "{ width, height }",
    "return `${Math.min(width, height) / 2}px`"
  )