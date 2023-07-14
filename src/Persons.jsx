function persons(props)
{
    let value = props.datasToShow
    
    return (
        value.map((element, index) => (
            <li key={index}  >{element.name} {element.phone}</li>
          ))
    )
}

export default persons