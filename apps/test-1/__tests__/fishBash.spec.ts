import { fishBash } from "../src/fishBash";

describe("fishBash", () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log");
  });
  afterEach(() => {
    consoleSpy.mockRestore();
  });
  // eslint-disable-next-line quotes
  it('should print "fish" for multiples of 3', () => {
    fishBash(3);
    expect(consoleSpy).toHaveBeenCalledWith(1);
    expect(consoleSpy).toHaveBeenCalledWith(2);
    expect(consoleSpy).toHaveBeenCalledWith("fish");
  });
  // eslint-disable-next-line quotes
  it('should print "bash" for multiples of 5', () => {
    fishBash(5);
    expect(consoleSpy).toHaveBeenCalledWith(1);
    expect(consoleSpy).toHaveBeenCalledWith(2);
    expect(consoleSpy).toHaveBeenCalledWith("fish");
    expect(consoleSpy).toHaveBeenCalledWith(4);
    expect(consoleSpy).toHaveBeenCalledWith("bash");
  });
  // eslint-disable-next-line quotes
  it('should print "fishbash" for multiples of 15', () => {
    fishBash(15);
    expect(consoleSpy).toHaveBeenCalledWith(1);
    expect(consoleSpy).toHaveBeenCalledWith(2);
    expect(consoleSpy).toHaveBeenCalledWith("fish");
    expect(consoleSpy).toHaveBeenCalledWith(4);
    expect(consoleSpy).toHaveBeenCalledWith("bash");
    expect(consoleSpy).toHaveBeenCalledWith("fish");
    expect(consoleSpy).toHaveBeenCalledWith(7);
    expect(consoleSpy).toHaveBeenCalledWith(8);
    expect(consoleSpy).toHaveBeenCalledWith("fish");
    expect(consoleSpy).toHaveBeenCalledWith("bash");
    expect(consoleSpy).toHaveBeenCalledWith(11);
    expect(consoleSpy).toHaveBeenCalledWith("fish");
    expect(consoleSpy).toHaveBeenCalledWith(13);
    expect(consoleSpy).toHaveBeenCalledWith(14);
    expect(consoleSpy).toHaveBeenCalledWith("fish bash");
  });
});
