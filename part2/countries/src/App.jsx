import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import CountryDetails from "./CountryDetails"
import CountryList from "./CountryList"

function App() {
  const [input, setInput] = useState('')
  const [countries, setCountries] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [weather, setWeather] = useState(null)
  const api_key = import.meta.env.VITE_SOME_KEY

  const getAllCountry = () => {
    axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        setCountries(response.data)
        setIsLoading(false)
      })
  }

  const getWeather = () => {
    if (queries.length === 1) {
      const country = queries[0]
      const city = country.capital
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`)
        .then(response => {
          setWeather(response.data)
          console.log(response.data)
        })
    }
  }

  const queries = countries.filter(country => country.name.common.toLowerCase().includes(input.toLowerCase()))

  useEffect(getAllCountry, [])
  useEffect(getWeather, [input])

  // fetching...
  if (isLoading) {
    return <div>Loading.... please wait...</div>
  }

  return (
    <>
      <div>
        find countries <input value={input} onChange={(e) => setInput(e.target.value)} disabled={isLoading} />
      </div>
      <div>
        {
          queries.length > 10 ? (
            <div>Too many matches, specify another filter</div>
          ) : queries.length === 1 ? (
            <CountryDetails country={queries[0]} weather={weather} />
          ) : (
            <CountryList queries={queries} setInput={setInput} />
          )
        }
      </div>
    </>
  )
}

export default App
