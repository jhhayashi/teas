import {
  AliShan,
  CremeEarlGrey,
  GoldenMonkey,
  Gunpowder,
  Gyokuro,
  ITeaData,
  LemonVerbena,
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
  [LemonVerbena],
  [OrangeEchinacea, Gyokuro],
  [Gunpowder],
  [MilkOolong, AliShan],
  [MasalaChai],
  [CremeEarlGrey, GoldenMonkey],
]

const withRanges: ITeaBase[][] = teas.map(row => row.map(tea => ({
  ...tea,
  // @ts-ignore
  brewTemp: new Range(...tea.brewTemp),
  // @ts-ignore
  brewTime: new TimeRange(...tea.brewTime),
})))

export default withRanges
