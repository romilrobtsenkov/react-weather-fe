import * as types from '../../constants/ActionTypes'
import Api from '../../utils/api'

export const getWeather = () => dispatch => {
  return Api('GET', '/some-weather-endpoint')
    .then(weather =>
      dispatch({ type: types.WEATHER_LOADED, weather })
    )
    .catch(err => {
      // TODO handle errors
      console.log(err)
    })
}
