import * as React from 'react'

import {ITea} from '../../data'

import TeaRow from './TeaRow'

interface ITeaChartProps {
  teas: ITea[][],
}

export default function TeaChart(props: ITeaChartProps) {
  return (
    <div>
      {props.teas.map(teaRow => <TeaRow teas={teaRow} />)}
    </div>
  )
}
