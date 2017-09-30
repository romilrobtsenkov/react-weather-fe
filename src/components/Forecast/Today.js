import React from 'react'
import PropTypes from 'prop-types'
import { getTempString, getSpeedString } from '../../utils/helpers'

const Today = props => {
  const { list, units, date } = props

  const today = list[0]
  const todayWeather = today.weather[0]
  const { wind } = today
  const { temp, humidity, pressure } = today.main

  return (
    <div>
      <h2>{date}</h2>
      <h3>{todayWeather.main}</h3>
      <div>
        <div>
          <p>{getTempString(temp, units)}</p>
        </div>
        <div>
          <p>ICON</p>
        </div>
        <div>
          <p>Humidity: { humidity } %</p>
          <p>Wind { getSpeedString(wind.speed, units) }</p>
          <p>Pressure: { pressure } hPa</p>
        </div>
      </div>
    </div>
  )
}

Today.propTypes = {
  list: PropTypes.array.isRequired,
  units: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
}

export default Today
