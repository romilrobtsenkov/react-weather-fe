import * as types from '../constants/ActionTypes'

const INITIAL_STATE = {
  units: 'C'
}
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.SET_UNITS: {
      const { units } = action
      return {
        ...state,
        units
      }
    }
    default:
      return {
        ...state
      }
  }
}
