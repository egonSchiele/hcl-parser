export type Value = string | number | boolean | List | Map;

export interface List extends Array<Value> {}

export type Map = {
  [key: string]: Value;
};

export type Attribute = {
  name: string;
  value: Value;
};

export type Block = {
  type: string;
  labels?: string[];
  body: Body;
};

export type Body = {
  attributes: Attribute[];
  blocks: Block[];
};

export type Document = Block[];

export type Comment = string;
// export type ForExpression = string;
