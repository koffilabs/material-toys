import {roundedShape} from "./shape";

describe("shape module isolated unit tests suite", () => {
  it("should return the right roundedShape (20px)", () => {
    expect(roundedShape({shape: "20 20 20 20"})).toBe("20px 20px 20px 20px")
  });
  it("should return the right roundedShape (16px and 0px)", () => {
    expect(roundedShape({shape: "16 16 0 0"})).toBe("16px 16px 0px 0px")
  });
  it("should return a function", () => {
    expect(typeof roundedShape({shape: "50% 50% 50% 50%"})).toBe("function")
  });
  it("should return the right full round shape: 25px (height = 50px)", () => {
    expect((roundedShape({shape: "50% 50% 50% 50%"}) as Function)({width: 100, height: 50})).toBe("25px");
  });
  it("should return the right full round shape: 25px (width = 50px)", () => {
    expect((roundedShape({shape: "50% 50% 50% 50%"}) as Function)({height: 100, width: 50})).toBe("25px");
  });
});