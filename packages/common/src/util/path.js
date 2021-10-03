let maxPoints = 0;
export const registerPath = (path) => {
  // TODO: points count here
  return new Function("{ width, height }", "return `" + path + "`");
};
