const Persons = ({ data,handleDelete}) => {
    return (
      <div>
      {data.map(person =>
        <li key={person.id}>
          {person.name} {person.number}
          <button onClick={()=>handleDelete(person.id)}>delete</button>
        </li>
      )}   
      </div>)
  }
  
  export default Persons