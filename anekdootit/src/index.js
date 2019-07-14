import React, { useState } from 'react'
import ReactDOM from 'react-dom'


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }



const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
       {text}
    </button>
  )


const MostVotes = (props) => {
    const max = props.points.reduce((a, b) => {
        return Math.max(a, b);
    })
    let pos = props.points.indexOf(max);
    console.log(pos)
    if(max === 0) {
        return (
            <div>
                No votes
            </div>
        )
    }
    return(
        <div>
            <p>{props.anecdotes[pos]} <br />
            Has {max} Votes</p>
        </div>
    )
}

const App = (props) => {
    
    const [selected, setSelected] = useState(0)
    const [points, setPoints] = useState(new Int8Array(anecdotes.length))
    const vote = () => {
        setPoints(
           
            points.map((v,i) => i === selected ? v+ 1 : v)
            
        )
    }
    
    const handleAnecdotes = () => {
        setSelected( getRndInteger(0, props.anecdotes.length))
        
    }

    return (
        <div>
            <h1>Anecdote Of The Day</h1>
            <p>{props.anecdotes[selected]} <br />
            Has {points[selected]} Votes </p>
            <Button handleClick={vote} text ='Vote' />
            <Button handleClick={handleAnecdotes} text ='Next Anecdote' />
            <h1>Anecdote With Most Votes</h1>
            <MostVotes points={points} anecdotes={anecdotes} />

        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)