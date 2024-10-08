import { StringCalculator } from "./StringCalculator";

describe(StringCalculator, () => {
  it("`An empty string returns zero `'' => 0`", () => {
    // arrange
    const stringCalculator = new StringCalculator();

    // act
    const result = stringCalculator.add("");

    // assert
    expect(result).toEqual(0);
  });
  it("2. A single number returns the value `'1' => 1` `'2' => 2`", () => {
    // arrange
    const stringCalculator = new StringCalculator();

    // act
    let result = stringCalculator.add("1");
    // assert
    expect(result).toEqual(1);

    // act
    result = stringCalculator.add("2");
    // assert
    expect(result).toEqual(2);
  });
  it("3. Two numbers, comma delimited, returns the sum `'1,2' => 3` `'10,20' => 30`", () => {
    // arrange
    const stringCalculator = new StringCalculator();

    // act
    let result = stringCalculator.add("1,2");
    // assert
    expect(result).toEqual(3);

    // act
    result = stringCalculator.add("10,20");
    // assert
    expect(result).toEqual(30);
  });
});
