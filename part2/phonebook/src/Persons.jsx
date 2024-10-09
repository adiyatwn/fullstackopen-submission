import Person from "./Person"

const Persons = ({ deletePerson, searchValue, persons }) => {

  const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(searchValue.toLowerCase()))
  return (
    <>
      {
        searchValue ? (
          filteredPersons.map(person => (
            <Person key={person.id} name={person.name} number={person.number} deletePerson={() => deletePerson(person.id)} />
          ))
        ) : (
          persons.map(person => (
            <Person key={person.id} name={person.name} number={person.number} deletePerson={() => deletePerson(person.id)} />
          ))
        )
      }
    </>
  )
}

export default Persons
