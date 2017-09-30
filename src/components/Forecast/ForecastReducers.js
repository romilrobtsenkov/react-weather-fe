import * as types from '../../constants/ActionTypes'

const INITIAL_STATE = {
  weather: {},
  loading: true
}
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.WEATHER_LOADED: {
      const { weather } = action
      return {
        ...state,
        weather,
        loading: false
      }
    }
    default:
      return {
        ...state
      }
  }
}
