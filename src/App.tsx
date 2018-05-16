import * as React from 'react'
import {compose, flatten, get, keyBy, map} from 'lodash/fp'
import cx from 'classnames'

import {TeaChart, TeaInfo} from './components'
import teas from './data'
import {ITeaID, ITea} from './types'
import * as cs from './styles.css'

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
    const activeTea = get(this.state.selectedTea || this.state.hoveredTea, this.state.teas)
    return (
      <div className={cs.appContainer}>
        <TeaChart
          className={cs.teaChart}
          teas={this.state.layout}
          hoveredTea={this.state.hoveredTea}
          onHover={this.updateHovered}
          selectedTea={this.state.selectedTea}
          onSelect={this.updateSelected}
        />
        <TeaInfo className={cx(cs.teaInfo, activeTea && cs.visible)} {...activeTea} />
      </div>
    )
  }
}
