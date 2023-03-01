import { getFirstTwoNumbers } from "../lib/Helper";

describe("getFirstTwoNumbers", () => {
  it("should return first two numbers of input if it starts with two numbers", () => {
    const input = "12abc";
    const output = "12";
    expect(getFirstTwoNumbers(input)).toEqual(output);
  });

  it("should return first character of input if it does not start with two numbers", () => {
    const input = "a123";
    const output = "a";
    expect(getFirstTwoNumbers(input)).toEqual(output);
  });

  it("should return empty string if input is empty", () => {
    const input = "";
    const output = "";
    expect(getFirstTwoNumbers(input)).toEqual(output);
  });
});
