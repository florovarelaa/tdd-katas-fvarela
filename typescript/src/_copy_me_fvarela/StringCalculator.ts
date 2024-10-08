export class StringCalculator {
  constructor() {}

  add(input) {
    let result = input
    if(result === '') return 0

    result = Number(result)
    return result;
  }
}
