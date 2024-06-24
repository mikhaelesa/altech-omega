import { sortAsc, sortDesc } from "../src/sort";

describe("sort ascending", () => {
  it("should return an empty array when given an empty array", () => {
    expect(sortAsc([])).toEqual([]);
  });

  it("should handle an array with a single element", () => {
    const arr = [1];
    expect(sortAsc(arr)).toEqual([1]);
  });

  it("should return the same array when given an already sorted array", () => {
    const arr = [1, 2, 3, 4, 5];
    expect(sortAsc(arr)).toEqual([1, 2, 3, 4, 5]);
  });

  it("should handle an array with all elements being the same", () => {
    const arr = [2, 2, 2, 2, 2];
    expect(sortAsc(arr)).toEqual([2, 2, 2, 2, 2]);
  });

  it("should sort an unsorted array", () => {
    const arr = [3, 8, 5, 1, 9];
    expect(sortAsc(arr)).toEqual([1, 3, 5, 8, 9]);
  });

  it("should handle arrays with duplicate values", () => {
    const arr = [3, 3, 8, 1, 9];
    expect(sortAsc(arr)).toEqual([1, 3, 3, 8, 9]);
  });

  it("should handle arrays with negative numbers", () => {
    const arr = [-4, 1, -3, -8, 6];
    expect(sortAsc(arr)).toEqual([-8, -4, -3, 1, 6]);
  });
});

describe("sort descending", () => {
  it("should return an empty array when given an empty array", () => {
    expect(sortDesc([])).toEqual([]);
  });

  it("should handle an array with a single element", () => {
    const arr = [1];
    expect(sortDesc(arr)).toEqual([1]);
  });

  it("should return the same array when given an already sorted array", () => {
    const arr = [5, 4, 3, 2, 1];
    expect(sortDesc(arr)).toEqual([5, 4, 3, 2, 1]);
  });

  it("should handle an array with all elements being the same", () => {
    const arr = [2, 2, 2, 2, 2];
    expect(sortDesc(arr)).toEqual([2, 2, 2, 2, 2]);
  });

  it("should sort an unsorted array", () => {
    const arr = [3, 8, 5, 1, 9];
    expect(sortDesc(arr)).toEqual([9, 8, 5, 3, 1]);
  });

  it("should handle arrays with duplicate values", () => {
    const arr = [3, 3, 8, 1, 9];
    expect(sortDesc(arr)).toEqual([9, 8, 3, 3, 1]);
  });

  it("should handle arrays with negative numbers", () => {
    const arr = [-4, 1, -3, -8, 6];
    expect(sortDesc(arr)).toEqual([6, 1, -3, -4, -8]);
  });
});
