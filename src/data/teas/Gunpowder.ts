import {ITeaData, TeaFamily} from './types'

const Gunpowder: ITeaData = {
  brewTemp: [180],
  brewTime: [120, 180],
  caffiene: 20,
  description: 'A classic China green tea, subtle and delicate. Gently rolled olive colored leaves makes our gunpowder a standout sensation.',
  family: TeaFamily.Green,
  name: 'Organic Gunpowder',
  displayName: 'Gunpowder',
  purchaseDate: new Date('05-01-2017'),
  url: 'https://www.tealuxe.com/store/our-teas/organic-gunpowder-green-tea-50-grams-1-detail',
}

export default Gunpowder
