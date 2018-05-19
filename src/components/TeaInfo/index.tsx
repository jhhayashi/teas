import * as React from 'react'

import {ITea} from '../../types'

import * as cs from './styles.css'

interface ITeaInfoProps extends ITea {
  className?: string,
}

export default function TeaInfo(props: ITeaInfoProps) {
  return (
    <div className={props.className}>
      {props.name && <h2 className={cs.title}>{props.name} ({props.family})</h2>}
      {props.brewTime && <p className={cs.section}>Brew Time: {props.brewTime.toString()}</p>}
      {props.brewTemp && <p className={cs.section}>Brew Temp: {props.brewTemp.toString()}&deg;</p>}
      {props.description && <p className={cs.section}>{props.description}</p>}
    </div>
  )
}
