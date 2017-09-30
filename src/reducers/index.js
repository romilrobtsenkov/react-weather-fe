import { combineReducers } from 'redux'

import forecast from '../components/Forecast/ForecastReducers'
import user from './userReducers'

const rootReducer = combineReducers({
  forecast,
  user
})

export default rootReducer
