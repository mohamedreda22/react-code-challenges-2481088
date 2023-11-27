import { useEffect, useState } from 'react'
import WindowEvent from './WindowEvent'

export default function ToggleWindowEvent () {
  const [windowEvent, setWindowEvent] = useState(false)

/*   useEffect(()=>{
    if (windowEvent) {
      window.addEventListener('dblclick', () => {
        alert('Double click => mouse pressed')
 })
    } else {
      window.removeEventListener('dblclick', () => {
        alert('Double click => mouse pressed')
      })
    }
  }, [windowEvent]) */
  return (
    <div>
      <button onClick={() => setWindowEvent(prevState => !prevState)}>Toggle Window Event</button>
      {windowEvent && <WindowEvent />}
    </div>
  )
}
