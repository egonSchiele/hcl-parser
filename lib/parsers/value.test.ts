import { describe, expect, it } from "vitest";
import { identifierParser } from "./value.js";
describe("identifierParser", () => {
  it("should parse a valid identifier", () => {
    const result = identifierParser("hello");
    expect(result).toEqual(["hello"]);
  });
});
