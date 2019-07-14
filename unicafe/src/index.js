import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {
    if(props.all === 0) {
        return (
            <div>
                No feedback given
            </div>
        )
    }

    return (
        <div>
            <table>
                <thead>
                    <Statistic text="Good" value ={props.good} />
                    <Statistic text="Neutral" value ={props.neutral} />
                    <Statistic text="Bad" value ={props.bad} />
                    <Statistic text="All" value ={props.all} />
                    <Statistic text="Average" value ={(props.good-props.bad) / props.all} />
                    <Statistic text="Positive" value ={(props.good/props.all) * 100 + " %" } />
                 </thead>
            </table>
        </div>
    )
  }

const Statistic = (props) => {
    return (
        <tr>
            <td>
                {props.text}: 
            </td>
            <td>
                {props.value}
            </td>
        </tr>
    )
}




const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
       {text}
    </button>
  )

const App = (props) => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [all, setAll] = useState(0)
  

const handleGoodClick = () => {
    setAll(all + 1)
    setGood(good +1) 
  }

const handleNeutralClick = () => {
    setAll(all + 1)
    setNeutral(neutral +1) 
}
const handleBadClick = () => {
    setAll(all + 1)
    setBad(bad +1) 
}
    return (
        <div>
            <h1>Give Feedback</h1>
            <Button handleClick={handleGoodClick} text ='Good' />
            <Button handleClick={handleNeutralClick} text ='Neutral' />
            <Button handleClick={handleBadClick} text ='Bad' />
            <h1>Statistics</h1>
            <Statistics good={good} neutral={neutral} bad={bad} all={all} />
        </div>
  )
}
 
  ReactDOM.render(
    <App />, 
    document.getElementById('root')
  )