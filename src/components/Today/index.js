import React from 'react'
import PropTypes from 'prop-types'
import { getTempString, getSpeedString, getIconClass } from '../../utils/helpers'
import './Today.scss'

const Today = props => {
  const { today, units, date } = props

  const todayWeather = today.weather[0]
  const { wind } = today
  const { temp, humidity, pressure } = today.main

  return (
    <section id='today-wrapper'>
      <h2 className='date-text'>{date}</h2>
      <h3 className='forecast-desc'>{todayWeather.description}</h3>
      <div className='current-wrapper'>
        <div className='current-temp'>
          <span>{getTempString(temp, units)}</span>
        </div>
        <div className='current-icon'>
          <span> <i className={getIconClass(todayWeather.icon)} /></span>
        </div>
        <div className='current-stats'>
          <table>
            <tbody>
              <tr>
                <td>Wind</td>
                <td>
                  <i className={'wi wi-wind from-' + wind.deg.toFixed() + '-deg'} />
                  {' '}
                  { getSpeedString(wind.speed, units) }
                </td>
              </tr>
              <tr>
                <td>Pressure</td>
                <td>{ pressure } hPa</td>
              </tr>
              <tr>
                <td>Clouds</td>
                <td>{ today.clouds.all } %</td>
              </tr>
              <tr>
                <td>Humidity</td>
                <td>{ humidity } %</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

Today.propTypes = {
  today: PropTypes.object.isRequired,
  units: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
}

export default Today
