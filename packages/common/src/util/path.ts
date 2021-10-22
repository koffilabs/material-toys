let maxBezierCount = 0;

// should reset the counter when a new theme is applied
export const resetMaxBezierCount = () => {
  maxBezierCount = 0;
};
export const getMaxBezierCount = () => maxBezierCount;
export const normalizePath = (path, count) => {
  const split: Array<string> = path.split("c");
  // -1 because we should not consider the path(... part
  const delta = maxBezierCount - (split.length - 1);
  let parts;
  console.log("split", split);
  [, ...parts] = [...split];
  const originalLength = parts.length;
  // TODO: use flatMap here?
  const first = Math.floor(split.length / maxBezierCount);

  for (let i = 0; i < delta; i++) {
    parts.splice(i % originalLength);
  }
  let normalizedPath = path;
  return normalizedPath;
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
