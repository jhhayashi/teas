import {
  CremeEarlGrey,
  GoldenMonkey,
  Gunpowder,
  Gyokuro,
  ITeaData,
  MasalaChai,
  MilkOolong,
  MintChamomile,
  OrangeEchinacea,
  UnityBlend,
} from './teas'
import Range, {IRange} from './Range'
import TimeRange from './TimeRange'

export interface ITeaBase extends ITeaData {
  brewTemp: IRange,
  brewTime: IRange,
}

const teas = [
  [MintChamomile, UnityBlend],
  [OrangeEchinacea],
  [Gyokuro, Gunpowder],
  [MilkOolong],
  [CremeEarlGrey, GoldenMonkey],
  [MasalaChai],
]

const withRanges: ITeaBase[][] = teas.map(row => row.map(tea => ({
  ...tea,
  // @ts-ignore
  brewTemp: new Range(...tea.brewTemp),
  // @ts-ignore
  brewTime: new TimeRange(...tea.brewTime),
})))

export default withRanges
