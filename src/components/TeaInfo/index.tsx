import * as React from 'react'

import {ITea} from '../../types'

export default function TeaInfo(props: ITea) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.description}</p>
    </div>
  )
}
