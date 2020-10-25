import * as transforms from "./transform";

describe("transform", () => {
  it("handles radial", () => {
    expect(transforms.radial(1, 0)).toEqual([1, 0.5]);
  });
});
