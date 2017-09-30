import React from 'react'
import { PropTypes } from 'prop-types'
import { getTempString, getSpeedString, getIconClass } from '../../utils/helpers'
import moment from 'moment'

const List = props => {
  const { list, units } = props

  let items = []

  // TODO remove first (current weather)

  list.forEach((c, i) => {
    let { dt, weather, main, wind } = c
    const todayWeather = weather[0]
    const { temp } = main

    items.push(
      <div key={dt} style={{ float: 'left', width: 100, border: '1px solid gray' }}>

        <i className={'wi wi-time-' + moment(dt * 1000).format('h')} /><br />
        {moment(dt * 1000).format('DD.MM.YY')}<br />
        <br />
        <i className={getIconClass(todayWeather.icon)} />
        <p>{ todayWeather.description }</p>
        <br />
        <p>{ getTempString(temp, units) }</p>
        <br />
        <p><i className={'wi wi-wind from-' + wind.deg.toFixed() + '-deg'} /> { getSpeedString(wind.speed, units) }</p>
      </div>
    )
  })

  return (
    <div >
      {items}
    </div>
  )
}

List.propTypes = {
  list: PropTypes.array.isRequired,
  units: PropTypes.string.isRequired
}

export default List
