import {
  AliShan,
  CremeEarlGrey,
  DragonPearl,
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
  [MintChamomile, LemonVerbena, UnityBlend],
  [Gyokuro, OrangeEchinacea, Gunpowder],
  [MilkOolong, DragonPearl, AliShan],
  [CremeEarlGrey, MasalaChai, GoldenMonkey],
]

const withRanges: ITeaBase[][] = teas.map(row => row.map(tea => ({
  ...tea,
  // @ts-ignore
  brewTemp: new Range(...tea.brewTemp),
  // @ts-ignore
  brewTime: new TimeRange(...tea.brewTime),
})))

export default withRanges
