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
});
