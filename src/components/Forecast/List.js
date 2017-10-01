import React from 'react'
import { PropTypes } from 'prop-types'
import { getTempString, getIconClass } from '../../utils/helpers'
import moment from 'moment'

import './List.scss'

const List = props => {
  const { list, units } = props

  let items = []

  // TODO remove first (current weather)

  list.forEach((c, i) => {
    let { dt, weather, main } = c
    const todayWeather = weather[0]
    const { temp } = main

    items.push(
      <div key={dt} className='weather-list-item' >
        <p className='list-weekday'>{moment(dt * 1000).format('dddd')}</p>
        <p className='list-icon'>
          <i className={getIconClass(todayWeather.icon)} />
        </p>
        <p className='list-temp'>{ getTempString(temp, units) }</p>
      </div>
    )
  })

  return (
    <div className='list-wrapper' >
      {items}
    </div>
  )
}

List.propTypes = {
  list: PropTypes.array.isRequired,
  units: PropTypes.string.isRequired
}

export default List
