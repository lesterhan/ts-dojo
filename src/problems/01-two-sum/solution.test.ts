import { describe, it, expect } from "vitest";
import { twoSum } from "./solution.js";

describe("twoSum", () => {
  it("finds indices in a basic case", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  it("finds indices when answer is not at the start", () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });

  it("handles duplicate values", () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });
});
