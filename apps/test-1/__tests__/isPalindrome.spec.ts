import { isPalindrome } from "../src/isPalindrome";

describe("is palindrome", () => {
  it("should return true for a single letter", () => {
    expect(isPalindrome("a")).toBe(true);
  });

  it("should return true for a repeated letter", () => {
    expect(isPalindrome("aaa")).toBe(true);
  });

  it("should return true for a simple palindrome", () => {
    expect(isPalindrome("aba")).toBe(true);
  });

  it("should return true for a longer palindrome", () => {
    // :)
    expect(isPalindrome("kasurrusak")).toBe(true);
  });

  it("should return true for a case-insensitive palindrome", () => {
    // :)
    expect(isPalindrome("KasurRusak")).toBe(true);
  });

  it("should return true for a palindrome with punctuation", () => {
    // :)
    expect(isPalindrome("Kasur, Nababan, Rusak.")).toBe(true);
  });

  it("should return true for an empty string", () => {
    // :)
    expect(isPalindrome("")).toBe(true);
  });

  test("should return false for a non-palindrome", () => {
    expect(isPalindrome("hello")).toBe(false);
  });
});
