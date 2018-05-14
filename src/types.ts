import {ITeaBase} from './data'

export type ITeaID = number | null

export interface ITea extends ITeaBase {
  id: ITeaID
}
