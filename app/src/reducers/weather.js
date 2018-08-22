import {
  GET_WEATHER_STARTED,
  GET_WEATHER_SUCCEEDED,
  GET_WEATHER,
  GET_FORECAST,
  GET_WEATHER_FAILED,
  IS_FETCHING
} from '../constants'
import { defaultWeatherState, defaultForecast } from '../lib/weatherStates'
{
  /*}
export const getWeather = (state = defaultWeatherState, action) => {
  switch (action.type) {
    case GET_WEATHER:
      return action.payload

    default:
      return state
  }
}
*/
}
const initialState = { all: [] }
export const getForecast = (state = initialState, action) => {
  switch (action.type) {
    case GET_FORECAST:
      return { ...state, all: action.payload }
    case GET_WEATHER_FAILED:
      return 'Could not fetch the forecast'
    default:
      return state
  }
}
