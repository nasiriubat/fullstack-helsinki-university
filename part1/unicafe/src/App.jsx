import { useState } from 'react'

const Button =({handleClick,text})=><button onClick={handleClick}>{text}</button>
const StatisticLine =({text,value})=>{
return <tr>
  <td>{text}</td>
  <td>{value}</td>
</tr>}
const Statistics = ({ goodCount, neutralCount, badCount, clickCount }) => {
  const positivePercentage = (goodCount/clickCount)*100+'%';
  const returnValue =(x)=> x >= 1 ? x : 0;
  const baseValue =(x)=> x >= 1 ? 1 : 0;
  const average = (returnValue(goodCount) + returnValue(neutralCount) + returnValue(badCount)) / (baseValue(goodCount) + baseValue(neutralCount) + baseValue(badCount));
  if(goodCount > 0 || badCount>0||neutralCount>0){
    return <div>
      <table>
        <tbody>
        <StatisticLine text = 'good' value={goodCount}/> 
        <StatisticLine text = 'neutral' value={neutralCount}/> 
        <StatisticLine text = 'bad' value={badCount}/> 
        <StatisticLine text = 'all' value={clickCount}/> 
        <StatisticLine text = 'average' value={average}/> 
        <StatisticLine text = 'positive' value={positivePercentage}/> 
        </tbody>
      </table>
      </div>
  }else{
    return <p>No feedback given</p>
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [click, setClick] = useState(0)

  const goodClick=()=>{
    setGood(good + 1);
    setClick(click+1)
  } 
  const neutralClick=()=>{
    setNeutral(neutral + 1);
    setClick(click+1)

  } 
  const badClick=()=>{
    setBad(bad + 1);
    setClick(click+1)

  }

  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={goodClick} text={'good'}/>
      <Button handleClick={neutralClick} text={'neutral'}/>
      <Button handleClick={badClick} text={'bad'}/>
      <h2>statistics</h2>
      <Statistics goodCount={good} neutralCount={neutral} badCount={bad} clickCount={click} />
    </div>
  )
}

export default App