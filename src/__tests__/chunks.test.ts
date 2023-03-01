import { chunks } from "../lib/Helper";

describe("chunks", () => {
  test("should return correct chunks when n divides array length", () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const n = 2;
    const expected = [
      [1, 2],
      [3, 4],
      [5, 6],
    ];
    const generator = chunks(arr, n);
    for (const chunk of generator) {
      expect(chunk).toEqual(expected.shift());
    }
    expect(expected.length).toBe(0);
  });

  test("should return correct chunks when n does not divide array length", () => {
    const arr = [1, 2, 3, 4, 5];
    const n = 3;
    const expected = [
      [1, 2, 3],
      [4, 5],
    ];
    const generator = chunks(arr, n);
    for (const chunk of generator) {
      expect(chunk).toEqual(expected.shift());
    }
    expect(expected.length).toBe(0);
  });

  test("should return empty array when given an empty array", () => {
    const arr: number[] = [];
    const n = 2;
    const generator = chunks(arr, n);
    const result = generator.next();
    expect(result.value).toEqual(undefined);
    expect(result.done).toBe(true);
  });

  test("should return array with single element when n is greater than array length", () => {
    const arr = [1, 2, 3];
    const n = 5;
    const expected = [[1, 2, 3]];
    const generator = chunks(arr, n);
    for (const chunk of generator) {
      expect(chunk).toEqual(expected.shift());
    }
    expect(expected.length).toBe(0);
  });
});
