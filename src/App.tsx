import * as React from 'react'
import {compose, flatten, keyBy, map} from 'lodash/fp'

import {TeaChart} from './components'
import teas from './data'
import {ITeaID, ITea} from './types'

let idCount = 0
const getId = () => idCount++

const teasWithIds = map(map(tea => ({...tea, id: getId()})), teas)

interface ITeaCache {
  [teaId: number]: ITea
}

// create cache of tea metadata by keying each tea by a generated id
const TEAS: ITeaCache = keyBy('id', flatten(teasWithIds))

export default class App extends React.Component {
  state = {
    hoveredTea: null,
    selectedTea: null,
    teas: TEAS,
    layout: teasWithIds,
  }

  updateHovered = (teaId: ITeaID) => {
    this.setState({hoveredTea: teaId})
  }

  updateSelected = (teaId: ITeaID) => {
    this.setState({selectedTea: teaId})
  }

  render() {
    return (
      <TeaChart
        teas={this.state.layout}
        hoveredTea={this.state.hoveredTea}
        onHover={this.updateHovered}
        selectedTea={this.state.selectedTea}
        onSelect={this.updateSelected}
      />
    )
  }
}
