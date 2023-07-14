import { useState,useEffect } from 'react'

const App = () => {
  const [persons, setPersons] = useState([{'name':'','phone':''}]) 
  const [newName, setNewName] = useState('')
  const [newphone, setNewPhone] = useState('')
  const [showAll, setShowAll] = useState(true)
  let [datasToShow, setDatasToShow] = useState([])


  
  function handleClick(e)
  {
    e.preventDefault()
    //setPersons([...persons,{'name':newName,'phone':newphone}])
    

  let alreadyExistingName = datasToShow.find(person => person.name === newName);

if (!alreadyExistingName) {
  setDatasToShow([...datasToShow,{'name':newName,'phone':newphone}])
}else{
  alert(newName+' is already added to phonebook ')
}
setPersons(datasToShow)  
    }

  function handleChange(e)
  {
    setNewName(e.currentTarget.value)
  }
function handleChangeSearch(e)
{
  let value = e.currentTarget.value.toLowerCase()

  setDatasToShow(datasToShow.filter(person =>  person.name.includes(value)))
  
  if(value== '')
  {
    //console.log(datasToShow)
    setDatasToShow(persons)
    
  }




  
  //setPersons(...persons,{'name':personnes[0].name,'phone':personnes[0].phone})
 //console.log(personnes)
 
}
  function handleChangeNumber(e)
  {
    setNewPhone (e.currentTarget.value)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <input onChange={handleChangeSearch} type="search" />
      <form>
        <div>
            Number: <input onChange={handleChangeNumber}/>
          </div>
          <div>
            name: <input onChange={handleChange}/>
          </div>
          <div>
            <button type="submit" onClick={handleClick}>add</button>
          </div>
        </form>
      <h2>Numbers</h2>
      <div>
    
        {datasToShow.map((element, index) => (
            <li key={index}  >{element.name} {element.phone}</li>
          ))}
    
      
    </div>
    </div>
  )
}

export default App