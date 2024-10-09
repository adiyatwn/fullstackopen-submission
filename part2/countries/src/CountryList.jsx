import ListItem from "./ListItem"

const CountryList = ({ queries, setInput }) => {
  return (
    queries.map(query => <ListItem key={query.name.common} name={query.name.common} setInput={setInput} />)
  )
}

export default CountryList
