import {ITeaData, TeaFamily} from './types'

const Gyokuro: ITeaData = {
  brewTemp: [175],
  brewTime: [90, 120],
  caffiene: 20,
  description: 'A must try for green tea enthusiasts. Literally translated "Jewel Dew," this full bodied tea offers unparalleled sweetness.',
  family: TeaFamily.Green,
  name: 'Yame Gyokuro',
  displayName: 'Gyokuro',
  purchaseDate: new Date('05-01-2017'),
  url: 'https://www.tealuxe.com/store/our-teas/gyokuro-50-grams-1-detail',
}

export default Gyokuro
