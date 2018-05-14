import * as React from 'react'

import {ITea, ITeaID} from '../../types'

import TeaRow from './TeaRow'

interface ITeaChartProps {
  teas: ITea[][],
  hoveredTea: ITeaID,
  onHover: ((id: ITeaID) => void),
  selectedTea: ITeaID,
  onSelect: ((id: ITeaID) => void),
}

export default function TeaChart(props: ITeaChartProps) {
  return (
    <div>
      {props.teas.map(teaRow => <TeaRow {...props} teas={teaRow} />)}
    </div>
  )
}
