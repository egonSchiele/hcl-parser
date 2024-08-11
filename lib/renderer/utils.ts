import { Block, Filter } from "@/lib/types.js";

export function isFilter(block: Block): block is Filter {
  return block.type === "filter";
}

export function quote(value: string): string {
  return `"${value}"`;
}
