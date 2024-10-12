import { PrimeFactors } from "./PrimeFactors";

describe(PrimeFactors, () => {
  it("should return [] when number is 1", () => {
    // arrange
    const sut = new PrimeFactors();

    // act
    const result = sut.generate(1);

    // assert
    expect(result).toEqual([]);
  });
  it("`2` should return `[2]`", () => {
    // arrange
    const sut = new PrimeFactors();

    // act
    const result = sut.generate(2);

    // assert
    expect(result).toEqual([2]);
  });
  it("`3` should return `[3]`", () => {
    // arrange
    const sut = new PrimeFactors();

    // act
    const result = sut.generate(3);

    // assert
    expect(result).toEqual([3]);
  });
});
