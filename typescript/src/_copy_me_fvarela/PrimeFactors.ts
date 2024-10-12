export class PrimeFactors {
  constructor() {}

  generate(number: number): number[] {
    if (number === 1) return [];
    return [number]
  }
}
