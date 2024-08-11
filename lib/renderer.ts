import { prettify } from "./renderer/prettify.js";
import { quote, isFilter } from "./renderer/utils.js";
import {
  BaseBlock,
  Block,
  Filter,
  HCLDocument,
  List,
  Value,
  Map,
  HCLBody,
  Attributes,
} from "./types.js";

export default function renderHCL(hclDocument: HCLDocument): string {
  return prettify(hclDocument.map(renderBlock).join("\n\n"));
}

export function renderBlock(block: Block): string {
  if (isFilter(block)) {
    return renderFilter(block);
  } else {
    return renderBaseBlock(block);
  }
}

export function renderBody(body: HCLBody): string {
  const all = [
    renderAttributes(body.attributes),
    ...body.blocks.map(renderBlock),
  ];
  return all.join("\n");
}

export function renderAttributes(attributes: Attributes): string {
  return `${Object.entries(attributes)
    .map(([key, value]) => `${key} = ${renderValue(value)}`)
    .join("\n")}`;
}

export function renderFilter(filter: Filter): string {
  return `filter {
  name = ${quote(filter.name)}
  values = [${filter.values.map(quote).join(", ")}]
}`;
}
export function renderBaseBlock(block: BaseBlock): string {
  return `${block.type} ${block.labels?.map(quote).join(" ")} {
         ${renderBody(block.body)}
}`;
}

export function renderValue(value: Value): string {
  if (typeof value === "string") {
    return `"${value}"`;
  } else if (typeof value === "number") {
    return value.toString();
  } else if (typeof value === "boolean") {
    return value ? "true" : "false";
  } else if (Array.isArray(value)) {
    return renderList(value);
  } else {
    return renderMap(value);
  }
}

export function renderList(list: List): string {
  return `[${list.map(renderValue).join(", ")}]`;
}

export function renderMap(map: Map): string {
  return `{${Object.entries(map.values)
    .map(([key, value]) => `${key} = ${renderValue(value)}`)
    .join(", ")}}`;
}
