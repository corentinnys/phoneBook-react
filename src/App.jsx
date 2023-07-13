import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState(
     ['']
  ) 
  const [newName, setNewName] = useState('')


  function handleClick(e)
  {
    e.preventDefault()
   if (persons.includes(newName)== false)
   {
    setPersons([...persons,newName]);
  
   }else{
    alert(newName+" is already added a phoneBook")
   }
     
   
  }
  
  function handleChange(e)
  {
    setNewName(e.currentTarget.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input onChange={handleChange}/>
        </div>
        <div>
          <button type="submit" onClick={handleClick}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person,index)=>
        <li key={index}>{person}</li> )}
    </div>
  )
}

export default App