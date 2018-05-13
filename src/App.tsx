import * as React from 'react'
import {compose, flatten, keyBy, map} from 'lodash/fp'

import {TeaChart} from './components'
import teas, {ITea} from './data'

let idCount = 0
const getId = () => idCount++

const teasWithIds = map(map(tea => ({...tea, id: getId()})), teas)

interface ITeaCache {
  [teaId: number]: ITea
}

// create cache of tea metadata by keying each tea by a generated id
const TEAS: ITeaCache = keyBy('id', flatten(teasWithIds))

export default class App extends React.Component {
  render() {
    return <TeaChart teas={teasWithIds} />
  }
}
