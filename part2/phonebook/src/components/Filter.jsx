const Filter = ({ text, filterHandler}) => {
    return (
      <p> filter shown with <input value={text} onChange={filterHandler}/></p>
      )
  }
  
  export default Filter