import { spread } from "./style";

describe("util/style isolated unit tests suite", () => {
  test("should return color:red", () => {
    const theme = {
      components: {
        Button: {
          color: "red",
        },
      },
    };
    const result = spread({ theme, path: "/components/Button" });
    expect(result).toEqual(["color:red;"]);
  });
  test("should return an empty string", () => {
    const theme = {
      components: {
        Button: {
          color: "red",
        },
      },
    };
    const result = spread({ theme, path: "/components/Button2" });
    expect(result).toEqual([]);
    const result2 = spread({ theme, path: "/components3/Button2" });
    expect(result2).toEqual([]);
  });
  test("should return an empty string", () => {
    const theme = {
      components: {
        Button: {
          color: "white",
          backgroundColor: "red",
        },
      },
    };
    const result = spread({ theme, path: "/components/Button" });
    expect(result).toEqual(["color:white;", "backgroundColor:red;"]);
  });
  // test("applyReactiveStyle should return the right style object", () => {
  //   const target = ;
  //   const returned = applyReactiveStyle({
  //     target,
  //     theme: {
  //       button: target,
  //     },
  //   });
  //   expect(returned).toMatchObject({
  //     color: "red",
  //   });
  // });
});
