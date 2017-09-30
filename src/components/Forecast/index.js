import { connect } from 'react-redux'
import { getWeather, initForecast, setUnits } from './ForecastActions'
import Forecast from './Forecast'

const mapStateToProps = state => ({
  forecast: state.forecast,
  units: state.user.units
})

export default connect(mapStateToProps, {
  getWeather,
  initForecast,
  setUnits
})(Forecast)
