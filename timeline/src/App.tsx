import './App.css'
import { Timeline } from './components/Timeline'
import { events } from './data/events_data'

function App() {



  return (
    <>    
      <Timeline dates={events.map( event => event.date)} />
    </>
  )
}

export default App
