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

export const getForecast = (state = defaultForecast, action) => {
  switch (action.type) {
    case GET_FORECAST:
      return action.payload
    default:
      return state
  }
}
