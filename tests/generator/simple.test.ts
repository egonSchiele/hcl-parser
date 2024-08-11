import { provider, data, filter } from "@/lib/generator.js";
import { describe, expect, it } from "vitest";

describe("simple", () => {
  it("should pass", () => {
    const doc = [
      provider("aws", { region: "us-west-2" }),
      data(
        "aws_ami",
        "ubuntu",
        { most_recent: true, owners: ["099720109477"] },
        [
          filter("name", [
            "ubuntu/images/hvm-ssd/ubuntu-focal-20.04-amd64-server-*",
          ]),
          filter("virtualization-type", ["hvm"]),
        ]
      ),
    ];
    expect(doc).toEqual([
      {
        type: "provider",
        labels: ["aws"],
        body: { attributes: { region: "us-west-2" }, blocks: [] },
      },
      {
        type: "data",
        labels: ["aws_ami", "ubuntu"],
        body: {
          attributes: { most_recent: true, owners: ["099720109477"] },
          blocks: [
            {
              type: "filter",
              name: "name",
              values: [
                "ubuntu/images/hvm-ssd/ubuntu-focal-20.04-amd64-server-*",
              ],
            },
            {
              type: "filter",
              name: "virtualization-type",
              values: ["hvm"],
            },
          ],
        },
      },
    ]);
  });
});
