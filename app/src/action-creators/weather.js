import fetch from 'isomorphic-fetch'
import {
  GET_WEATHER_STARTED,
  GET_WEATHER_SUCCEEDED,
  GET_WEATHER,
  GET_FORECAST,
  GET_WEATHER_FAILED,
  IS_FETCHING
} from '../constants'

const DarkSky = require('dark-sky')

//const darksky = new DarkSky(process.env.REACT_APP_DARK_SKY)
const url = `${process.env.REACT_APP_BASE_URL}${
  process.env.REACT_APP_DARK_SKY
}32.8052,-79.7597`
//const url = process.env.REACT_APP_BASE_URL
{
  /*
export const setWeather = myWeather = async (dispatch, getState) => {
  const weather = await fetch(url, {
    headers: 'Content-Type': 'application/json'
  },
method: 'GET',
body: JSON.stringify(getState().currentWeather.data))
    .then(res => res.json())
    .catch(err => dispatch({type: GET_WEATHER_FAILED, payload: 'Your weather can not be retrieved at this time, please try again later.  Sorry for the inconvenience.'}))

  dispatch({ type: GET_WEATHER, payload: weather })
}
*/
}

export const setForecast = async (dispatch, getState) => {
  const forecast = await fetch(url)
    .then(res => res.json())
    .catch(err =>
      dispatch({
        type: GET_WEATHER_FAILED,
        payload:
          'Your weather can not be retrieved at this time, please try again later.  Sorry for the inconvenience.'
      })
    )

  dispatch({ type: GET_FORECAST, payload: forecast })
}

{
  /*
export const getWeatherEpic = action$ => action$
    .ofType(actionTypes.GET_WEATHER_INITIATE)
    .map(payload => getWeatherParams(payload))
    .switchMap((params) =>
        Observable.ajax(params)
            .map(res => res.response)
            .map(response => convertFarToCent(response))
            .map(response => convertEpochToHours(response))
            .map(response => buildStats(response))
            .map(response => ({
                type: actionTypes.GET_WEATHER_SUCCESS,
                data: response
                })
            )
            .catch(err => Observable.of({
                type: actionTypes.GET_WEATHER_FAIL,
                payload: {
                    error: err,
                },
            }))
);




// Darksky provides temperatures in Farenheit, convert them to a sensible format
const convertFarToCent = res => {
    res.hourly.data.map(hour => hour.tempInC = Math.round(((hour.temperature - 32) * 5 / 9) *100) /100)
    return res
};

// convert Darksky's epoch time into hours (0 to 24)
const convertEpochToHours = res => {
    res.hourly.data.map(hour => hour.timeInHrs = moment(hour.time).hour())
    return res
};

// incomplete temperature statistics function
const buildStats = res => {
    let sumTemp = 0;
    res.hourly.data.map(hour => sumTemp += hour.tempInC)
    // let avgTemp = Math.round(((sumTemp / res.hourly.data.length) / 100 ) * 100);
    return res
};













location form 

import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Field, reduxForm } from 'redux-form'
import { RaisedButton, MenuItem } from 'material-ui'
import { renderSelectField } from './mui/SelectField';
import { locationArr, locationsObj } from '../redux/constants'
import {
    getWeather
} from '../redux/actions/actions';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';


const required = value => value == null ? 'Required' : undefined

const provideCity = () => {
    return locationArr.map((city, i) => {
        return (
            <MenuItem key={i} value={city} primaryText={city}/>
        )
    })
};

const composeForecastCities = () => {
    return (
        <Field
            name="city"
            component={renderSelectField}
            label="Select City"
            validate={required}>
            { provideCity()}
        </Field>
    )
};


let SelectCityForm = props => {
    const {handleSubmit, pristine, submitting} = props;

    return (
        <MuiThemeProvider>
            <div style={{padding: '30px'}}>
                <form onSubmit={handleSubmit}>
                    <Grid>
                        <Row>
                            <Col xs={12}>
                                <div>
                                    { composeForecastCities() }
                                </div>
                            </Col>
                        </Row>
                    </Grid>
                    <div>
                        <RaisedButton
                            label="Get Forecast"
                            primary={true}
                            style={{margin: '12px'}}
                            type="submit"
                            disabled={pristine || submitting}
                        />
                    </div>
                </form>
            </div>
        </MuiThemeProvider>
    )
};

SelectCityForm = reduxForm({
    form: 'selectCityForm',
})(SelectCityForm);


export class LocationFormContainer extends Component {

    asyncFormSubmitHandler = cityObj => {
        let selectedLocationCoords = locationsObj[cityObj.city];
        let dispatch = this.props.dispatch;
        dispatch(getWeather(selectedLocationCoords));

    };

    render() {

        if (this.props.WEATHER.weatherInitiated && !this.props.WEATHER.weatherSuccess) {
            return (
                <div style={{ margin: '200px' }}>
                    <h2>
                        ..loading
                    </h2>
                </div>
            )
        }

        return (
            <div style={{maxWidth: '320px'}}>
                <SelectCityForm
                    dispatch={this.props.dispatch}
                    onSubmit={ this.asyncFormSubmitHandler }
                />
            </div>
        )
    }
}

*/
}
