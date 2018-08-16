import {
  GET_WEATHER_STARTED,
  GET_WEATHER_SUCCEEDED,
  GET_WEATHER,
  GET_WEATHER_FAILED,
  IS_FETCHING
} from '../constants'

const defaultWeatherState = {
  weatherInitiated: null,
  weatherSuccess: null,
  weatherFailed: null,
  weatherResults: {
    lattitude: 0,
    longitude: 0,
    timezone: '',
    offset: 0,
    currently: {
      time: 0,
      summary: '',
      icon: '',
      precipIntensity: 0,
      precipProbability: 0,
      temperature: 0,
      apparentTemperature: 0,
      dewPoint: 0,
      humidity: 0,
      windSpeed: 0,
      windBearing: 0,
      cloudCover: 0,
      pressure: 0,
      ozone: 0
    },
    hourly: {
      summary: '',
      icon: '',
      data: [
        {
          time: 0,
          summary: '',
          icon: '',
          precipIntensity: 0,
          precipProbability: 0,
          temperature: 0,
          apparentTemperature: 0,
          dewPoint: 0,
          humidity: 0,
          windSpeed: 0,
          windBearing: 0,
          cloudCover: 0,
          pressure: 0,
          ozone: 0
        }
      ]
    }
  }
}

export const getWeather = (state = defaultWeatherState, action) => {
  switch (action.type) {
    case GET_WEATHER:
      return action.payload

    default:
      return state
  }
}
