import { Event } from "../types/types"
import './EventVisualizer.css'

interface IProps {
    event: Event
}

export const EventVisualizer = ({event}: IProps) => {

    return (
        <div className="event">
            <h1>{event.title}</h1>
            <h2> {event.date.toDateString()} </h2>
            <h2>{event.location}</h2>
            <iframe src={event.mapurl} width="600" height="450" style={{border:0}} loading="lazy"/>
        </div>
    )
}