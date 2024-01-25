
import './App.css'
import { EventVisualizer } from './types/EventVisualizer'
import { events } from './data/events_data'

function App() {

  const EventsList = events.map(event => {
    return (
      <li>
        <EventVisualizer
        event= {event}
        />
      </li>
    )
  })

  return (
    <>    
      <ul>
        {EventsList}
      </ul>
    </>
  )
}

export default App
