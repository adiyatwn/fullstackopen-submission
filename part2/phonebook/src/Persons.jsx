import Person from "./Person"

const Persons = ({ searchValue, persons }) => {

  const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(searchValue.toLowerCase()))
  return (
    <>
      {
        searchValue ? (
          filteredPersons.map(person => (
            <Person key={person.id} name={person.name} number={person.number} />
          ))
        ) : (
          persons.map(person => (
            <Person key={person.id} name={person.name} number={person.number} />
          ))
        )
      }
    </>
  )
}

export default Persons
