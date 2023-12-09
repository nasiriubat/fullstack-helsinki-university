import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/person'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterData, setFilterData] = useState(persons)
  const [searchText, setsearchText] = useState('')

  useEffect(() => {
    personService.getAll()
      .then(initialData => {
        setPersons(initialData)
        setFilterData(initialData)
      })
  }, []);

  const existCheck = (name) => {
    return persons.find(person => person.name == name)
  }
  const setNameHandler = (event) => {
    setNewName(event.target.value)
  }
  const setNumberHandler = (event) => {
    setNewNumber(event.target.value)
  }
  const filterPersons = (event) => {
    setsearchText(event.target.value)
    setFilterData(persons.filter(person => person.name.toLowerCase().includes(event.target.value.toLowerCase())))
  }

  const addPerson = (event) => {
    const existingUser = existCheck(newName)
    
    if (existingUser) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one ?`)) {
        personService.update(existingUser.id,{...existingUser,number:newNumber})
          .then(returnData => {
            const newArray = persons.concat(returnData);
            setPersons(newArray)
            setFilterData(newArray)
            setNewName('')
            setNewNumber('')
          })
      }
    } else {
      const newObj = {
        name: newName,
        number: newNumber,
      }
      personService.create(newObj)
        .then(returnData => {
          const newArray = persons.concat(returnData);
          setPersons(newArray)
          setFilterData(newArray)
          setNewName('')
          setNewNumber('')
        })
    }
   

  }

  const handleDelete = (id) => {
    const data = persons.find(person => person.id === id)
    if (window.confirm(`Delete ${data.name} ?`)) {
      personService.deleteData(id)
        .then(returnData => {
          const newArray = persons.filter(person => person.id !== id)
          setPersons(newArray)
          setFilterData(newArray)
        })
    }

  }

  return (
    <div>
      <h2> Phonebook </h2>
      <Filter text={searchText} filterHandler={filterPersons} />

      <h3>Add a new</h3>
      <PersonForm
        addPerson={addPerson}
        setNameHandler={setNameHandler}
        setNumberHandler={setNumberHandler}
        name={newName}
        number={newNumber}
      />

      <h3>Numbers</h3>
      <Persons data={filterData} handleDelete={handleDelete} />
    </div>
  )
}

export default App