const WeatherDetails = ({ city, weather }) => {
  // in celcius
  const temp = parseFloat(weather.main.temp - 273.15).toFixed(2)
  const weatherIcon = weather.weather[0].icon
  const weatherDesc = weather.weather[0].description
  const iconUrl = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`
  const wind = weather.wind.speed

  return (
    <>
      <h1>Weather in {city}</h1>
      <p>temperature {temp} Celcius</p>
      <img src={iconUrl} alt={weatherDesc} />
      <p>wind {wind} m/s</p>
    </>
  )
}

export default WeatherDetails
