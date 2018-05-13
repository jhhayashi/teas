import Range from './Range'

export default class TimeRange extends Range {
  public static secToString(s: number): string {
    const mins = Math.floor(s / 60)
    const secs = s % 60
    return s ? `${mins ? `${mins}m` : ''}${secs ? `${secs}s` : ''}` : '0'
  }

  public toString(): string {
    const [min, max] = this.range
    return this.range.length === 1
      ? TimeRange.secToString(min)
      : `${TimeRange.secToString(min)}-${TimeRange.secToString(max)}`
  }
}
