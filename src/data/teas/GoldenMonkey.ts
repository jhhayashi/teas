import {ITeaData, TeaFamily} from './types'

const GoldenMonkey: ITeaData = {
  brewTemp: [212],
  brewTime: [180, 300],
  caffiene: 50,
  description: 'Picked from plants dating back to the eighteenth century, this superb Keemun has a full, well-rounded body with a velvety character.',
  family: TeaFamily.Black,
  name: 'Golden Monkey',
  purchaseDate: new Date('04-21-2017'),
  url: 'https://www.tealuxe.com/store/our-teas/golden-monkey-10-grams-detail',
}

export default GoldenMonkey
