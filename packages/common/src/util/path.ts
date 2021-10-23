let maxBezierCount = 0;

// should reset the counter when a new theme is applied
export const resetMaxBezierCount = () => {
  maxBezierCount = 0;
};
export const getMaxBezierCount = () => maxBezierCount;
export const normalizePath = (path, count) => {
  const bezierFill = "0,0 0,0 0,0";
  const split: Array<string> = path.split("c").map((part) => part.trim());
  // -1 because we should not consider the path(... part
  const delta = count - (split.length - 1);
  let normalizedParts;

  // excludes the first m x y
  [, ...normalizedParts] = [...split];
  normalizedParts[normalizedParts.length - 1] = normalizedParts[
    normalizedParts.length - 1
  ].replace(/'|\)/g, "");
  normalizedParts = normalizedParts.map((part) => part.trim());
  const repetitions = normalizedParts.map(() => 0);
  for (let i = 0; i < delta; i++) {
    repetitions[i % repetitions.length]++;
  }
  const finalParts = repetitions.flatMap((repetition, index) => {
    const repeatedPaths = [];
    for (let i = 0; i < repetition; i++) {
      repeatedPaths.push(bezierFill);
    }
    return [normalizedParts[index], ...repeatedPaths];
  });
  return `${[split[0], ...finalParts].join(" c ")}')`;
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
