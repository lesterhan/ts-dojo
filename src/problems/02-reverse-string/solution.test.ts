import { describe, it, expect } from "vitest";
import { reverseString } from "./solution.js";

describe("reverseString", () => {
  it("reverses a basic string", () => {
    expect(reverseString("hello")).toBe("olleh");
  });

  it("reverses a mixed-case string", () => {
    expect(reverseString("TypeScript")).toBe("tpircSepyT");
  });

  it("returns an empty string unchanged", () => {
    expect(reverseString("")).toBe("");
  });

  it("handles a single character", () => {
    expect(reverseString("a")).toBe("a");
  });
});
