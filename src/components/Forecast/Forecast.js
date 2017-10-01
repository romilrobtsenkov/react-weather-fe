import React from 'react'
import PropTypes from 'prop-types'
import queryString from 'query-string'
import { Link } from 'react-router-dom'
import moment from 'moment'

import { removeEmpty } from '../../utils/helpers'

import Today from '../Today'
import List from '../List'
import Unitswitch from '../Unitswitch'

import backIcon from '../../media/backIcon.svg'
import './Forecast.scss'

class Forecast extends React.Component {
  constructor (props) {
    super(props)

    const { q, lat, lon } = queryString.parse(props.history.location.search)
    this.query = removeEmpty({ q, lat, lon })
    this.date = moment().format('dddd, MMMM Do YYYY')
    this.handleUnitChange = this.handleUnitChange.bind(this)
  }

  componentDidMount () {
    if (!Object.keys(this.query).length) {
      // clear url and return to search
      this.props.history.replace('/')
      return
    }

    const { units } = window.localStorage
    if (units && units !== this.props.units) {
      this.props.setUnits(units)
    }
    this.props.getWeather(this.query)
  }

  componentWillUnmount () {
    this.props.initForecast()
  }

  handleUnitChange () {
    this.props.setUnits(this.props.units === 'C' ? 'F' : 'C')
  }

  render () {
    const { units, forecast } = this.props
    const { loading, weather, error } = forecast
    const errorAccoured = !loading && error

    return (
      <section id='forecast'>
        <div className='forecast-header clearfix'>
          <Link className='link-back' to='/'><img src={backIcon} /></Link>
          <Unitswitch units={units} handleUnitChange={this.handleUnitChange} />
          <div className='city-placeholder'>
            <h1 className='city-name' >
              <span className='name-text'>
                {weather.city && weather.city.name}
              </span>
            </h1>
          </div>
        </div>
        {errorAccoured &&
          <p>
            {error.data.msg || error.data.message}
          </p>}

        {!loading && !error &&
          <div>
            <Today today={weather.list[0]} units={units} date={this.date} />
            <List list={weather.list} units={units} />
          </div>}
      </section>
    )
  }
}

Forecast.propTypes = {
  forecast: PropTypes.object.isRequired,
  getWeather: PropTypes.func.isRequired,
  initForecast: PropTypes.func.isRequired,
  setUnits: PropTypes.func.isRequired
}

export default Forecast
