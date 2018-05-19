export interface ITeaData {
  brewTemp: [number] | [number, number] | any,
  brewTime: [number] | [number, number] | any,
  caffiene: number,
  description: string,
  family: string,
  name: string,
  displayName?: string,
  purchaseDate: Date,
  url?: string,
}

export enum TeaFamily {
  Black = 'Black',
  Green = 'Green',
  Herbal = 'Herbal',
  Mate = 'Mate',
  Oolong = 'Oolong',
  PuErh = 'Pu-Erh',
  White = 'White',
}
