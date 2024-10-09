import { useState } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchValue, setSearchValue] = useState('')

  const addPerson = (e) => {
    e.preventDefault()

    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      const personObj = {
        name: newName,
        number: newNumber,
        id: persons.length + 1,
      }

      setPersons(persons.concat(personObj))
      setNewName('')
      setNewNumber('')
    }
  }


  return (
    <div>
      <h2>Phonebook</h2>

      <Filter searchValue={searchValue} setSearchValue={setSearchValue} />

      <h2>add a new</h2>

      <PersonForm
        addPerson={addPerson}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
      />

      <h2>Numbers</h2>

      <Persons searchValue={searchValue} persons={persons} />

    </div>
  )
}

export default App
