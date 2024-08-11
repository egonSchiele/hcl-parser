/* provider "aws" {
    region = "us-west-2"
  }
  
  data "aws_ami" "ubuntu" {
    most_recent = true
  
    filter {
      name   = "name"
      values = ["ubuntu/images/hvm-ssd/ubuntu-focal-20.04-amd64-server-*"]
    }
  
    filter {
      name   = "virtualization-type"
      values = ["hvm"]
    }
  
    owners = ["099720109477"] # Canonical
  } */

import { Attributes, Block, Filter } from "./types.js";

/*
export type Block = {
  type: string;
  labels?: string[];
  body: Body;
};
*/

export function data(
  source: string,
  name: string,
  attributes: Attributes,
  blocks: Block[]
): Block {
  return {
    type: "data",
    labels: [source, name],
    body: {
      attributes,
      blocks,
    },
  };
}

export function provider(name: string, attributes: Attributes): Block {
  return {
    type: "provider",
    labels: [name],
    body: {
      attributes,
      blocks: [],
    },
  };
}

export function resource(
  type: string,
  name: string,
  attributes: Attributes,
  blocks: Block[]
): Block {
  return {
    type: "resource",
    labels: [type, name],
    body: {
      attributes,
      blocks,
    },
  };
}

export function variable(name: string, attributes: Attributes): Block {
  return {
    type: "variable",
    labels: [name],
    body: {
      attributes,
      blocks: [],
    },
  };
}

export function locals(attributes: Attributes, blocks: Block[]): Block {
  return {
    type: "locals",
    labels: [],
    body: {
      attributes,
      blocks,
    },
  };
}

export function output(name: string, attributes: Attributes): Block {
  return {
    type: "output",
    labels: [name],
    body: {
      attributes,
      blocks: [],
    },
  };
}

export function module(
  source: string,
  name: string,
  attributes: Attributes,
  blocks: Block[]
): Block {
  return {
    type: "module",
    labels: [source, name],
    body: {
      attributes,
      blocks,
    },
  };
}

export function terraform(version: string, blocks: Block[]): Block {
  return {
    type: "terraform",
    labels: [version],
    body: {
      attributes: {},
      blocks,
    },
  };
}

export function filter(name: string, values: string[]): Filter {
  return {
    type: "filter",
    name,
    values,
  };
}
