import { normalizePath } from "./path";
describe("path utilities isolated unit tests suite", () => {
  test("should return the same path", () => {
    const path = "path('m 0 0, c 1,2 3,4, 5,6 c 7,8 9,10 11,12')";
    expect(normalizePath(path, 2)).toBe(path);
  });
  test("should return one more bézier curve in the path", () => {
    const path = "path('m 0 0, c 1,2 3,4, 5,6 c 7,8 9,10 11,12')";
    expect(normalizePath(path, 3)).toBe(
      "path('m 0 0, c 1,2 3,4, 5,6 c 1,2 3,4, 5,6 c 7,8 9,10 11,12')"
    );
  });
  test("should return two more bézier curve in the path", () => {
    const path = "path('m 0 0, c 1,2 3,4, 5,6 c 7,8 9,10 11,12')";
    expect(normalizePath(path, 4)).toBe(
      "path('m 0 0, c 1,2 3,4, 5,6 c 1,2 3,4, 5,6 c 7,8 9,10 11,12 c 7,8 9,10 11,12')"
    );
  });
});
