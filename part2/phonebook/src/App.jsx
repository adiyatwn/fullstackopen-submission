import { useEffect, useState } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'
import personService from './service/persons'
import Notification from './Notification'
import './style.css'

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchValue, setSearchValue] = useState('')
  const [successMessage, setSuccessMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  const addPerson = (e) => {
    e.preventDefault()

    if (persons.some(person => person.name === newName)) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        // update phone number
        const person = persons.find(person => person.name === newName)
        const changedPerson = { ...person, number: newNumber }

        personService
          .update(person.id, changedPerson)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.name === newName ? returnedPerson : person))
            setSuccessMessage(`${newName} number updated successfully`)
            setTimeout(() => {
              setSuccessMessage(null)
            }, 2000)
          })
          .catch(error => {
            setErrorMessage(error.response.data.error)
          })
      }
    } else {
      // add new person
      const personObj = {
        name: newName,
        number: newNumber,
      }

      personService
        .create(personObj)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
          setErrorMessage(null)
          setSuccessMessage(`Added ${newName}`)
          setTimeout(() => {
            setSuccessMessage(null)
          }, 2000)
        })
        .catch(error => {
          setErrorMessage(error.response.data.error)
        })
    }
  }

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
      .catch(error => {
        setErrorMessage('error fetching initial data')
      })
  }, [])

  const deletePerson = (id) => {
    const person = persons.find(person => person.id === id)

    if (window.confirm(`Delete ${person.name}?`)) {
      personService
        .deletePerson(id)
        .then(deletedPerson => {
          const newPersons = persons.filter(person => person.id !== deletedPerson.id)
          setPersons(newPersons)
        })
        .catch(error => {
          const updatedPersons = persons.filter(p => p.id !== person.id)
          setPersons(updatedPersons)
          setErrorMessage(`Information of ${person.name} has already been removed from server`)
          setTimeout(() => {
            setErrorMessage(null)
          }, 2000)
        })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification type="success" message={successMessage} />
      <Notification type="error" message={errorMessage} />

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

      <Persons deletePerson={deletePerson} searchValue={searchValue} persons={persons} />

    </div>
  )
}

export default App
