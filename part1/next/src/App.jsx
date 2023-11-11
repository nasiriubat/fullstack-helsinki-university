import {useState} from 'react'

const Display = ({counter}) =><div>{counter}</div>
const Button = ({onClick,text}) => <button onClick={onClick}>{text}</button>


const App = () => {

const [counter,setcounter] = useState(0);

const increaseOne=()=>setcounter(counter+1)
const decreaseOne=()=>setcounter(counter-1)
const resetCounter=()=>setcounter(0)

  return (
    <div>
      <Display counter={counter}/>
      <Button onClick={increaseOne} text='Plus'/>
      <Button onClick={resetCounter} text='Reset'/>
      <Button onClick={decreaseOne} text='Minus'/>
    </div>
  )
}

export default App