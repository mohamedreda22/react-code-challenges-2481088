import { useEffect, useState } from 'react'

export default function ScoreKeeper () {
  const [score, setScore] = useState(localStorage.getItem("score")||0)
  useEffect(
    () => {
      localStorage.setItem("score",score)
      document.title = `Score: ${score}`
    },
    [score]
  )


  return (
    <div>
      <h1>The score is {score}</h1>
      <button onClick={() => setScore(prevScore => prevScore + 1)}>+</button>
      <button onClick={() => setScore(prevScore => prevScore - 1)}>-</button>
      <button onClick={() => setScore(0)}>Reset</button>
    </div>
  )
}
