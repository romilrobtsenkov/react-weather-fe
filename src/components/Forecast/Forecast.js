import React from 'react'
import PropTypes from 'prop-types'
import queryString from 'query-string'
import { Link } from 'react-router-dom'

import './Forecast.scss'

class Forecast extends React.Component {
  constructor (props) {
    super(props)

    this.query = queryString.parse(props.history.location.search)
    if (!Object.keys(this.query).length) {
      // clear url and return to search
    }

    console.log('searching', this.query)
  }

  componentDidMount () {
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
