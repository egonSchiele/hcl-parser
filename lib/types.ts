// Define the possible types for  values
type Value = string | number | boolean | List | Map;

// Define a type for lists
interface List extends Array<Value> {}

// Define a type for maps
interface Map {
  [key: string]: Value;
}

// Define a type for attributes
interface Attribute {
  name: string;
  value: Value;
}

// Define a type for blocks
interface Block {
  type: string;
  labels?: string[];
  body: Body;
}

// Define a type for the body of a block
interface Body {
  attributes: Attribute[];
  blocks: Block[];
}

// Define a type for the entire document
type Document = Block[];

type Comment = string;
// type ForExpression = string;
