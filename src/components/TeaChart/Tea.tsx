import * as React from 'react'

import {RADIUS} from '../../constants'

import * as cs from './styles.css'

const circleStyles = {
  width: `${RADIUS * 2}px`,
  height: `${RADIUS * 2}px`,
  borderRadius: `${RADIUS}px`,
}

export default function Tea(props) {
  return (
    <div className={cs.tea} style={circleStyles}>
      {props.name}
    </div>
  )
}
