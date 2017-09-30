import * as types from '../../constants/ActionTypes'
import Api from '../../utils/api'

export const getWeather = (query) => dispatch => {
  return Api('GET', '/weather', { params: query })
    .then(weather => {
      console.log('Loaded weather status: ' + weather.status)
      return dispatch({ type: types.WEATHER_LOADED, weather: weather.data })
    })
    .catch(error => {
      console.log(error)
      return dispatch({ type: types.WEATHER_LOADED, error })
    })
}

export const initForecast = () => dispatch => {
  dispatch({ type: types.WEATHER_INIT })
}
