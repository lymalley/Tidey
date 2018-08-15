/**
 * Title: Local Weather App (www.freecodecamp.com)
 * Author: Joneric Escobedo**
 * Description: This is a local weather application that pulls your geo-coordinates
 * based on your IP address and calls on the Dark Sky API for local weather.
 *
 * **Big thanks to Eina O. @ https://codepen.io/thelittleblacksmith/. Her JavaScript
 * code was well written and commented very well which in turn helped me learn a TON.
 */

$(document).ready(function() {
  $('body')
    .delay(1000)
    .animate({ opacity: 1 }, 700) // Make the app fade-in

  // Get geo-coordinates
  $.ajax({
    type: 'GET',
    url: 'https://ipinfo.io/json/',
    success: coordinates
  })

  // coordinates callback function
  function coordinates(data) {
    var coords = data.loc
    var city = data.city
    var region = data.region
    var country = data.country

    // Dark Sky API
    var darkSkyAPI =
      'https://api.darksky.net/forecast/process.env.REACT_APP_MAP/32.8052,79.7597'

    // Pass city, region, and country to displayLocation
    displayLocation(city, region, country)

    // Pass API url to getWeather
    getWeather(darkSkyAPI)
  } // end of coordinates callback

  // displayLocation (pass city, region, and country arguments)
  function displayLocation(city, region, country) {
    // Turn country code into full country name
    $.ajax({
      type: 'GET',
      url: 'https://restcountries.eu/rest/v1/alpha?codes=' + country,
      success: function(data) {
        // Print to html
        $('#city-state').text((city + ', ' + region).toUpperCase())
        $('#country').text(data[0].name.toUpperCase())
      }
    })
  } // end of displayLocation

  // getWeather (pass API URL argument)
  function getWeather(darkSkyAPI) {
    $.ajax({
      type: 'GET',
      url: darkSkyAPI,
      dataType: 'jsonp',
      success: weather
    })

    // weather function to get darksky JSON data
    function weather(data) {
      var temp = Math.round(data.currently.temperature)
      var icon = data.currently.icon
      var summary = data.currently.summary
      //console.log(temp, icon, summary);

      displayWeather(icon, temp, summary)
    } // end of weather

    // displayWeather (pass icon, temp, summary as arguments)
    function displayWeather(icon, temp, summary) {
      //console.log(temp, icon, summary);

      // Using the colored Skycons - https://github.com/maxdow/skycons
      var skycons = new Skycons({
        monochrome: false,
        colors: {
          main: '#333333',
          moon: '#78586F',
          fog: '#78586F',
          fogbank: '#B4ADA3',
          cloud: '#B4ADA3',
          snow: '#7B9EA8',
          leaf: '#7B9EA8',
          rain: '#7B9EA8',
          sun: '#FF8C42'
        }
      })

      var tempC = Math.round(((temp - 32) * 5) / 9)
      $('#temperature').text(temp + '°')

      // Engage 'Bootstrap Toggle'
      $(function() {
        $('#unit-convert').change(function() {
          if ($(this).prop('checked')) {
            $('#temperature').html(tempC + '° ')
          } else {
            $('#temperature').html(temp + '° ')
          }
        })
      }) // End of 'Bootstrap Toggle'

      $('#condition').text(summary.toUpperCase())

      // Add Skycon based on weather condition
      skycons.add('icon1', icon)
      skycons.play()
    } // end of displayWeather
  } // end getWeather
})
