import * as React from 'react'
import cx from 'classnames'

import {RADIUS} from '../../constants'

import * as cs from './styles.css'

const circleStyles = {
  width: `${RADIUS * 2}px`,
  height: `${RADIUS * 2}px`,
  borderRadius: `${RADIUS}px`,
}

interface ITeaProps {
  onMouseEnter: (() => void),
  onMouseLeave: (() => void),
  onClick: (() => void),
  isSelected: boolean,
  isHovered: boolean,
  name: string,
  displayName?: string,
}

export default function Tea(props: ITeaProps) {
  const classes = cx(cs.tea, props.isSelected && cs.selected, props.isHovered && cs.hovered)
  return (
    <div
      className={classes}
      style={circleStyles}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      onClick={props.onClick}
    >
      {props.displayName || props.name}
    </div>
  )
}
