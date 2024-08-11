import { data, filter, provider } from "./lib/generator.js";
import renderHCL from "./lib/renderer.js";
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
const doc = [
  provider("aws", { region: "us-west-2" }),
  data("aws_ami", "ubuntu", { most_recent: true, owners: ["099720109477"] }, [
    filter("name", ["ubuntu/images/hvm-ssd/ubuntu-focal-20.04-amd64-server-*"]),
    filter("virtualization-type", ["hvm"]),
  ]),
];

console.log(doc);
console.log(renderHCL(doc));
