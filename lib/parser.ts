import {
  between,
  capture,
  digit,
  istr,
  letter,
  many,
  many1,
  noneOf,
  or,
  quote,
  seqC,
  spaces,
  str,
} from "tarsec";

const identifierParser = many1(or(letter, digit, str("_"), str("-")));

const stringParser = between(quote, quote, many(noneOf("'\"")));
const numberParser = many1(digit);
const booleanParser = or(istr("true"), istr("false"));
const valueParser = or(stringParser, numberParser, booleanParser);
const listParser = between(str("["), str("]"), many1(valueParser));

const mapItemParser = seqC(
  spaces,
  capture(identifierParser, "key"),
  spaces,
  str(":"),
  spaces,
  capture(valueParser, "value"),
  spaces
);

const mapParser = between(str("{"), str("}"), many1(mapItemParser));
