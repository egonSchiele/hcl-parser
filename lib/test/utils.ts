import { ParserResult } from "tarsec";

export const expectSuccess = <T>(
  result: ParserResult<T>,
  expected: T
): boolean => {
  if (result.success) {
    return result.result === expected;
  }
  return false;
};
