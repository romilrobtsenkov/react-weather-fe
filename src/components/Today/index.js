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
    <section className='today'>
      <h2>{date}</h2>
      <h3>{todayWeather.description}</h3>
      <ul>
        <li>{getTempString(temp, units)}</li>
        <li>
          <span className={getIconClass(todayWeather.icon)} />
        </li>
        <li>
          <table>
            <tbody>
              <tr>
                <td>Wind</td>
                <td>
                  <span className={'wi wi-wind from-' + wind.deg.toFixed() + '-deg'} />
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
        </li>
      </ul>
    </section>
  )
}

Today.propTypes = {
  today: PropTypes.object.isRequired,
  units: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
}

export default Today
