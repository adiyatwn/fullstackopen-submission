import WeatherDetails from "./WeatherDetail"

const CountryDetails = ({ country, weather }) => {
  const name = country.name.common
  const capital = country.capital
  const area = country.area
  const languages = Object.values(country.languages)
  const flagUrl = country.flags.svg
  const flagAlt = country.flags.alt

  return (
    <div>
      <h1>{name}</h1>
      <div>capital {capital}</div>
      <div>area {area}</div>
      <p><b>languages:</b></p>
      <ul>
        {
          languages.map(language => (
            <li key={language}>{language}</li>
          ))
        }
      </ul>
      <img src={flagUrl} alt={flagAlt} width={200} />

      {
        weather !== null && <WeatherDetails city={capital} weather={weather} />
      }
    </div>
  )
}

export default CountryDetails
