import * as React from 'react'

import {ITea, ITeaID} from '../../types'

import Tea from './Tea'
import * as cs from './styles.css'

interface ITeaRowProps {
  teas: ITea[],
  hoveredTea: ITeaID,
  onHover: ((id: ITeaID) => void),
  selectedTea: ITeaID,
  onSelect: ((id: ITeaID) => void),
}

export default function TeaRow(props: ITeaRowProps) {
  return (
    <div className={cs.teaRow}>
      {props.teas.map(tea => (
        <Tea
          {...tea}
          isSelected={props.selectedTea === tea.id}
          isHovered={props.hoveredTea === tea.id}
          onMouseEnter={() => props.onHover(tea.id)}
          onMouseLeave={() => props.onHover(null)}
          onClick={() => (props.selectedTea === tea.id ? props.onSelect(null) : props.onSelect(tea.id))}
        />
      ))}
    </div>
  )
}
