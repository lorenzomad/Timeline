import { Event } from "../types/types"
import './EventVisualizer.css'

interface IProps {
    event: Event
}

export const EventVisualizer = ({event}: IProps) => {

    return (
        <div className="event">
            <p><em>Event:</em> {event.title}</p>
            <p><em>When:</em> {event.date.toDateString()} </p>
            <p><em>Where:</em> {event.location}</p>
            <iframe  
            className="map"
            src={event.mapurl} width="600" height="450" style={{border:0}} loading="lazy"/>
        </div>
    )
}