import { connect } from 'react-redux'
import { getWeather, initForecast } from './ForecastActions'
import Forecast from './Forecast'

const mapStateToProps = state => ({
  forecast: state.forecast
})

export default connect(mapStateToProps, { getWeather, initForecast })(Forecast)
