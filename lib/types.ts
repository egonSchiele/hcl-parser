export type Value = string | number | boolean | List | Map;

export interface List extends Array<Value> {}

export type Map = {
  type: "map";
  values: {
    [key: string]: Value;
  };
};

export type Attributes = {
  [key: string]: Value;
};

export type BaseBlock = {
  type: string;
  labels?: string[];
  body: HCLBody;
};

export type Filter = {
  type: "filter";
  name: string;
  values: string[];
};

export type Block = BaseBlock | Filter;

export type HCLBody = {
  attributes: Attributes;
  blocks: Block[];
};

export type HCLDocument = Block[];

export type Comment = string;
// export type ForExpression = string;
