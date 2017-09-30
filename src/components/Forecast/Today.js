import React from 'react'
import PropTypes from 'prop-types'
import { getTempString, getSpeedString, getIconClass } from '../../utils/helpers'

const Today = props => {
  const { today, units, date } = props

  const todayWeather = today.weather[0]
  const { wind } = today
  const { temp, humidity, pressure } = today.main

  return (
    <div>
      <h2>{date}</h2>
      <h3>{todayWeather.description}</h3>
      <div>
        <div>
          <p>{getTempString(temp, units)}</p>
        </div>
        <div>
          <p> <i className={getIconClass(todayWeather.icon)} /></p>
        </div>
        <div>
          <p>Wind { getSpeedString(wind.speed, units) }</p>
          <p>Pressure: { pressure } hPa</p>
          <p>Clouds: { today.clouds.all } %</p>
          <p>Humidity: { humidity } %</p>
        </div>
      </div>
    </div>
  )
}

Today.propTypes = {
  today: PropTypes.object.isRequired,
  units: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
}

export default Today
