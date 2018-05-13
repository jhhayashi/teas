import * as React from 'react'

import {ITea} from '../../data'

import Tea from './Tea'
import * as cs from './styles.css'

interface ITeaRowProps {
  teas: ITea[],
}

export default function TeaRow(props: ITeaRowProps) {
  return (
    <div className={cs.teaRow}>
      {props.teas.map(tea => <Tea {...tea} />)}
    </div>
  )
}
