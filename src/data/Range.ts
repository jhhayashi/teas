export interface IRange {
  min: number,
  max?: number,
  toString: () => string,
}

export default class Range implements IRange {
  protected range: number[]

  constructor(min: number, max?: number) {
    this.range = typeof max === 'undefined' ? [min] : [min, max]
  }

  get min() {
    return this.range[0]
  }

  get max() {
    return this.range.length === 1 ? this.range[0] : this.range[1]
  }

  public toString(): string {
    return this.range.length === 1 ? `${this.range[0]}` : `${this.range[0]}-${this.range[1]}`
  }
}
