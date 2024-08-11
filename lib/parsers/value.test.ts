import { describe, expect, it } from "vitest";
import { identifierParser } from "./value.js";
import { expectSuccess } from "@/lib/test/utils.js";
describe("identifierParser", () => {
  it("should parse a valid identifier", () => {
    const result = identifierParser("hello");
    expectSuccess(result, "hello");
  });
});
