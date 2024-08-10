import {
  between,
  capture,
  digit,
  istr,
  letter,
  many,
  many1,
  map,
  noneOf,
  or,
  Parser,
  quote,
  seqC,
  spaces,
  str,
} from "tarsec";
import { Value } from "@/lib/types.js";

const join = (p: Parser<string[]>) =>
  map(p, (chars: string[]) => chars.join(""));

export const identifierParser: Parser<string> = join(
  many1(or(letter, digit, str("_"), str("-")))
);

export const stringParser: Parser<string> = between(
  quote,
  quote,
  join(many(noneOf("'\"")))
);
export const numberParser: Parser<number> = map(join(many1(digit)), (n) =>
  Number(n)
);
export const booleanParser: Parser<boolean> = map(
  or(istr("true"), istr("false")),
  (b) => b === "true"
);
export const valueParser: Parser<Value> = or(
  stringParser,
  numberParser,
  booleanParser
);
export const listParser: Parser<Value[]> = between(
  str("["),
  str("]"),
  many1(valueParser)
);

export const mapItemParser = seqC(
  spaces,
  capture(identifierParser, "key"),
  spaces,
  str(":"),
  spaces,
  capture(valueParser, "value"),
  spaces
);

export const mapParser = between(str("{"), str("}"), many1(mapItemParser));
