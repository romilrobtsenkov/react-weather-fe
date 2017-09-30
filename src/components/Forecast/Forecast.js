import React from 'react'
import PropTypes from 'prop-types'
import queryString from 'query-string'

import './Forecast.scss'

class Forecast extends React.Component {
  constructor (props) {
    super(props)

    this.query = queryString.parse(props.history.location.search)
    if (!Object.keys(this.query).length) {
    }

    console.log('searching', this.query)
  }

  componentDidMount () {
    this.props.getWeather(this.query)
  }

  render () {
    return (
      <div id='forecast'>

        <pre />
      </div>
    )
  }
}

Forecast.propTypes = {
  forecast: PropTypes.object.isRequired,
  getWeather: PropTypes.func.isRequired
}

export default Forecast
