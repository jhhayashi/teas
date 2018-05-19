import * as React from 'react'

import {ITea, ITeaID} from '../../types'

import TeaRow from './TeaRow'

interface ITeaChartProps {
  teas: ITea[][],
  hoveredTea: ITeaID,
  onHover: ((id: ITeaID) => void),
  selectedTea: ITeaID,
  onSelect: ((id: ITeaID) => void),
  className?: string,
}

export default function TeaChart(props: ITeaChartProps) {
  return (
    <div className={props.className}>
      {props.teas.map((teaRow, i) => <TeaRow key={i} {...props} teas={teaRow} />)}
    </div>
  )
}
