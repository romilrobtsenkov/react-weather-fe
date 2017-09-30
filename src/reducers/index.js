import { combineReducers } from 'redux'

import forecast from '../components/Forecast/ForecastReducers'

const rootReducer = combineReducers({
  forecast
})

export default rootReducer
