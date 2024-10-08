import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))

  const addVote = (anecdoteIndex) => {
    const newVote = [...points]
    newVote[anecdoteIndex] += 1

    setPoints(newVote)
  }
  const randomNumber = () => {
    return Math.round(Math.random() * (anecdotes.length - 1))
  }

  const mostVoteIndex = points.indexOf(Math.max(...points))

  return (
    <div>
      <div>
        <h1>Anecdote of the day</h1>
        <p>{anecdotes[selected]}<br />
          has {points[selected]} votes</p>
        <div>
          <button onClick={() => addVote(selected)}>vote</button>
          <button onClick={() => setSelected(randomNumber())}>next anecdote</button>
        </div>
      </div>

      <div>
        <h1>Anecdote with most votes</h1>
        <p>{anecdotes[mostVoteIndex]}<br />
          has {points[mostVoteIndex]} votes</p>
      </div>
    </div >
  )
}

export default App
