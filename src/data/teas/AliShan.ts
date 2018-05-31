import {ITeaData, TeaFamily} from './types'

const AliShan: ITeaData = {
  brewTemp: [195],
  brewTime: [60, 240],
  caffiene: 40,
  description: 'This famous Taiwanese oolong is sweet and floral. The creamy golden liquor yields flavors of hyacinth and asian pears with a mild nutty finish.',
  family: TeaFamily.Oolong,
  name: 'Ali Shan',
  purchaseDate: new Date('05-25-2018'),
  url: 'https://www.memteaimports.com/tea/ali-shan',
}

export default AliShan
