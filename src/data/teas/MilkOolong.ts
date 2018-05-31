import {ITeaData, TeaFamily} from './types'

const MilkOolong: ITeaData = {
  brewTemp: [195],
  brewTime: [180, 420],
  caffiene: 40,
  description: "This delightful, hand-processed green oolong is grown high in the Fujian mountains in China. Famous for its 'milky' taste and silky texture, the large, tightly-rolled leaves have the alluring fragrance of sweet cream and pineapple. The flavor is smooth with light, orchid notes. Great for multiple infusions.",
  family: TeaFamily.Oolong,
  name: 'Milk Oolong: Jin Xuan',
  displayName: 'Milk Oolong',
  purchaseDate: new Date('04-21-2018'),
  url: 'http://www.republicoftea.com/milk-oolong-full-leaf-loose-oolong-tea/p/v09996/',
}

export default MilkOolong
