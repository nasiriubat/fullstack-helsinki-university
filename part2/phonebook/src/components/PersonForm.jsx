const PersonForm = ({ addPerson, setNameHandler,setNumberHandler , name , number}) => {
    return (
        <form onSubmit={addPerson} >
        <div >
          name: < input value={name} onChange={setNameHandler} />
        </div>
        <div >
          number: < input value={number} onChange={setNumberHandler} />
        </div>
        <div>
          <button type="submit" > add </button> </div>
      </form>      )
  }
  
  export default PersonForm