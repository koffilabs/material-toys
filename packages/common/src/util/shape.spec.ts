import { roundedShape } from "./shape";

describe("shape module isolated unit tests suite", () => {
  it("should return the right roundedShape (20px)", () => {
    expect(roundedShape({ shape: "20 20 20 20" })).toBe("20px 20px 20px 20px");
  });
  it("should return the right roundedShape (16px and 0px)", () => {
    expect(roundedShape({ shape: "16 16 0 0" })).toBe("16px 16px 0px 0px");
  });
});
