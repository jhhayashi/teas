import {ITeaData, TeaFamily} from './types'

const MasalaChai: ITeaData = {
  brewTemp: [212],
  brewTime: [180, 300],
  caffiene: 50,
  description: 'A classic combination of Nilgiri black tea blended with cinnamon, cardamom, ginger, clove and black pepper. Traditionally served with steamed milk, sugar and/or honey.',
  family: TeaFamily.Black,
  name: 'Masala Chai',
  purchaseDate: new Date('04-21-2017'),
  url: 'https://www.tealuxe.com/store/our-teas/masala-chai-50-grams-1-detail',
}

export default MasalaChai
