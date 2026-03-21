// isObjectLike.test.js
// 2026-03-21
// Author: Sara Virtanen
// Unit tests for the isObjectLike function. Verifies that the function correctly identifies object-like values.

import { describe, it, expect } from "vitest";
import isObjectLike from "../src/isObjectLike.js";

describe("isObjectLike", () => {
  it("should return true for plain objects", () => {
    expect(isObjectLike({})).toBe(true);
  });

  it("should return true for arrays", () => {
    expect(isObjectLike([1, 2, 3])).toBe(true);
  });

  it("should return false for null", () => {
    expect(isObjectLike(null)).toBe(false);
  });

  it("should return false for functions", () => {
    expect(isObjectLike(Function)).toBe(false);
  });

  it("should return false for strings", () => {
    expect(isObjectLike("hello")).toBe(false);
  });

  it("should return false for numbers", () => {
    expect(isObjectLike(42)).toBe(false);
  });
});
