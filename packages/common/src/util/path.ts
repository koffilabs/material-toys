let maxBezierCount = 0;

// should reset the counter when a new theme is applied
export const resetMaxBezierCount = () => {
  maxBezierCount = 0;
};
export const getMaxBezierCount = () => maxBezierCount;
export const normalizePath = (path, count) => {
  const split: Array<string> = path.split("c");
  // -1 because we should not consider the path(... part
  const delta = count - (split.length - 1);
  let parts;
  [, ...parts] = [...split];
  const normalizedParts = [...parts];
  normalizedParts[normalizedParts.length - 1] = normalizedParts[
    normalizedParts.length - 1
  ].replace(/'|\)/g, "");

  for (let i = 0; i < delta; i++) {
    normalizedParts.splice(
      i % normalizedParts.length,
      0,
      parts[i % normalizedParts.length]
    );
  }
  return `${[split[0], ...normalizedParts].join("c")}')`;
};
export const registerPath = (path: string) => {
  const interpolate = new Function(
    "{ width, height }",
    "return `" + path + "`"
  );
  const countPath = interpolate({ width: 0, height: 0 });
  const bezierCount = countPath.match(/c/gim).length;
  maxBezierCount = Math.max(bezierCount, maxBezierCount);
  const interpolateAndNormalizePath = new Function(
    "{ width, height }",
    "return `" + normalizePath(path, maxBezierCount) + "`"
  );
  console.log("maxBezierCount is", maxBezierCount);

  return interpolateAndNormalizePath;
};
