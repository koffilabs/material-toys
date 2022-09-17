interface ShapeArgs {
  shape: string;
  fill: string;
  stroke?: string;
}
export const generateCutShape = ({shape, fill, stroke = "transparent"}: ShapeArgs) => {
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
    borderImage
  };
}