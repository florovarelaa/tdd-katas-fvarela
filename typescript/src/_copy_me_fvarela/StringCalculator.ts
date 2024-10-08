export class StringCalculator {
  constructor() {}

  add(input: string): number {
    if (input === '') return 0;

    const numbers = input.split(/,|\n/).map((element) => Number(element));

    const negatives = numbers.filter(num => num < 0);
    if (negatives.length > 0) {
      throw new Error(`negatives not allowed: ${negatives.join(',')}`);
    }

    const result = numbers.reduce((acc, curr) => acc + curr, 0);

    return result;
  }
}
