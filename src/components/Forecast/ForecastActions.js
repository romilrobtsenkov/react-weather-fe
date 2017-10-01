import * as types from '../../constants/ActionTypes'
import Api from '../../utils/api'

export const getWeather = (query) => dispatch => {
  const { cachedContent } = window.localStorage
  let cachedWeather
  if (cachedContent) {
    cachedWeather = JSON.parse(cachedContent)
    if (JSON.stringify(cachedWeather.query) === JSON.stringify(query)) {
      dispatch({ type: types.WEATHER_LOADED, weather: cachedWeather.weather })
    } else {
      window.localStorage.removeItem(cachedContent)
    }
  }

  return Api('GET', '/weather', { params: query })
    .then(weather => {
      // console.log('Loaded weather status: ' + weather.status)

      if (cachedWeather && cachedWeather.dateModified === weather.dateModified) {
        // console.log('same data, do not trigger update')
        return
      }

      window.localStorage.setItem('cachedContent', JSON.stringify({
        query,
        weather: weather.data,
        dateModified: weather.dateModified
      }))

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

export const setUnits = (units) => dispatch => {
  window.localStorage.setItem('units', units)
  dispatch({ type: types.SET_UNITS, units })
}
