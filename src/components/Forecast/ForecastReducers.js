import * as types from '../../constants/ActionTypes'

const INITIAL_STATE = {
  weather: {},
  loading: true,
  error: false
}
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.WEATHER_LOADED: {
      const { weather, error } = action
      return {
        ...state,
        weather: weather || {},
        loading: false,
        error: error || false
      }
    }
    case types.WEATHER_INIT:
      return INITIAL_STATE
    default:
      return {
        ...state
      }
  }
}
