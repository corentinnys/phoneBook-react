function Formulaire(props)
{
 return(
    <form>
    <div>
        Number: <input onChange={props.handleChangeNumber}/>
      </div>
      <div>
        name: <input onChange={props.onChange}/>
      </div>
      <div>
        <button type="submit" onClick={props.onClick}>add</button>
      </div>
    </form>
 )
}
export default Formulaire