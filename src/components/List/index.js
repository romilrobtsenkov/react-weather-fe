import React from 'react'
import { PropTypes } from 'prop-types'
import { getTempString, getIconClass } from '../../utils/helpers'
import moment from 'moment'

import './List.scss'

const List = props => {
  const { list, units } = props

  let items = []

  // skip second if multiple entries for current day
  const firstDate = moment(list[0].dt_txt).format('D')
  const secondDate = moment(list[1].dt_txt).format('D')
  if (firstDate === secondDate) {
    list.splice(1, 1)
  }

  list.forEach((c, i) => {
    let { dt, weather, main } = c
    const singleWeather = weather[0]
    const { temp } = main

    items.push(
      <li key={dt} className='items__item' >
        <p className='items__item__weekday'>{moment(dt * 1000).format('dddd')}</p>
        <p className='items__item__icon'><span className={getIconClass(singleWeather.icon)} /></p>
        <p className='items__item__temp'>{getTempString(temp, units)}</p>
      </li>
    )
  })

  return (
    <ul className='items' >
      {items}
    </ul>
  )
}

List.propTypes = {
  list: PropTypes.array.isRequired,
  units: PropTypes.string.isRequired
}

export default List
