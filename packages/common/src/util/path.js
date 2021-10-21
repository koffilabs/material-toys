let maxPoints = 0;
export const registerPath = (path) => {
  // TODO: points count here
  // console.log("registering path", path);
  return new Function("{ width, height }", "return `" + path + "`");
};
