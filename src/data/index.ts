import Range, {IRange} from './Range'
import TimeRange from './TimeRange'

const FAMILIES = {
  black: 'black',
  green: 'green',
}

interface ITea {
  brewTemp: IRange,
  brewTime: IRange,
  description: string,
  family: string,
  name: string,
  purchaseDate: Date,
}

const teas: ITea[] = [
  {
    brewTemp: new Range(175),
    brewTime: new TimeRange(180),
    description: 'This is a green tea from Japan',
    family: FAMILIES.green,
    name: 'Gyokuro',
    purchaseDate: new Date('01-01-2017'),
  },
  {
    brewTemp: new Range(175),
    brewTime: new TimeRange(180),
    description: 'This is a green tea from Japan',
    family: FAMILIES.green,
    name: 'Milk Oolong',
    purchaseDate: new Date('01-01-2017'),
  },
  {
    brewTemp: new Range(212),
    brewTime: new TimeRange(180),
    description: 'This is a well-balanced black tea',
    family: FAMILIES.black,
    name: 'Golden Monkey',
    purchaseDate: new Date('01-01-2017'),
  },
]

export default teas
