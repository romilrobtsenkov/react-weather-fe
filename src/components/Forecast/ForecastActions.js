import * as types from '../../constants/ActionTypes'
import Api from '../../utils/api'

export const getWeather = (query) => dispatch => {
  return Api('GET', '/weather', { params: query })
    .then(weather => {
      console.log('Loaded weather status: ' + weather.status)
      return dispatch({ type: types.WEATHER_LOADED, weather: weather.data })
    })
    .catch(err => {
      // TODO handle errors
      console.log(err)
    })
}
