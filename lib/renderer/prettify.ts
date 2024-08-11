export function prettify(hcl: string) {
  const lines = hcl.split("\n");
  const stack = [];
  let indent = 0;
  let result = "";
  for (let line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith("}")) {
      indent -= 2;
    }
    result += " ".repeat(indent) + trimmed + "\n";
    if (trimmed.endsWith("{")) {
      indent += 2;
    }
  }
  return result;
}
