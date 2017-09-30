import React from 'react'
import PropTypes from 'prop-types'
import queryString from 'query-string'
import { Link } from 'react-router-dom'
import { removeEmpty } from '../../utils/helpers'

import './Forecast.scss'

class Forecast extends React.Component {
  constructor (props) {
    super(props)

    const { q, lat, lng } = queryString.parse(props.history.location.search)
    this.query = removeEmpty({ q, lat, lng })
  }

  componentDidMount () {
    if (!Object.keys(this.query).length) {
      // clear url and return to search
      this.props.history.replace('/')
      return
    }
    this.props.getWeather(this.query)
  }

  componentWillUnmount () {
    // Reset all state params
    this.props.initForecast()
  }

  render () {
    const { loading, weather, error } = this.props.forecast
    const errorAccoured = !loading && error
    console.log(weather)

    return (
      <div id='forecast'>
        <Link to='/'>Back</Link>
        {errorAccoured &&
          <p>
            {error.data.msg}
          </p>}

        {!loading && !error &&
          <div>
            <p>Got results</p>
            <p>{weather.city.name}</p>
          </div>}
      </div>
    )
  }
}

Forecast.propTypes = {
  forecast: PropTypes.object.isRequired,
  getWeather: PropTypes.func.isRequired,
  initForecast: PropTypes.func.isRequired
}

export default Forecast
