export class StringCalculator {
  constructor() {}

  add(input: string): number {
    if (input === '') return 0;

    const numbers = input.split(/,|\n/).map((element) => Number(element));

    const result = numbers.reduce((acc, curr) => acc + curr, 0);

    return result;
  }
}
