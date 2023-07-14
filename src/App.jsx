import { useState,useEffect } from 'react'
import Persons from './Persons'
import Filter from './Filter'
import Formulaire from './Formulaire'

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
    <Filter onChange={handleChangeSearch} />
     <Formulaire onChange={handleChange} onClick={handleClick} onChangeNumber = {handleChangeNumber}/>
      <h2>Numbers</h2>
      <div>
   <Persons datasToShow={datasToShow}/> 
        
    </div>
    </div>
  )
}

export default App