import { Event } from "../types/types"
import './EventVisualizer.css'

interface IProps {
    event: Event
}

export const EventVisualizer = ({event}: IProps) => {

    return (
        <div className="event">
            <h2>Event: {event.title}</h2>
            <h2>When: {event.date.toDateString()} </h2>
            <h2>Where: {event.location}</h2>
            <iframe  
            className="map"
            src={event.mapurl} width="600" height="450" style={{border:0}} loading="lazy"/>
        </div>
    )
}