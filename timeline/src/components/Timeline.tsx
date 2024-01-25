import { useState } from "react"
import { ProgressBar } from "./ProgressBar"
import { EventVisualizer } from "./EventVisualizer"
import { events } from "../data/events_data"
import { differenceInDays } from "../utils/datefunction"
import './Timeline.css'

interface IProps {
    dates: Date []
}

export const Timeline = ({dates}: IProps) => {

    // current index to scroll through the dates
    const [index, setIndex] = useState(0)

    const date = dates[index]
    const startDate = dates[0]
    const endDate = dates[dates.length - 1]
    const totalDays = differenceInDays(startDate, endDate)

    const days_passed = differenceInDays(startDate, date)

    const percentage_passed = days_passed / totalDays    

    const decreaseDate = () => {
        setIndex(index !== 0 ? index - 1 : 0)
    }

    const increaseDate = () => {
        setIndex(index !== dates.length - 1 ? index + 1 : dates.length - 1)
    }

    return (
        <div className="layout">
            <ProgressBar percentage =  {percentage_passed}/>
        
            <div className="event">
                <button onClick={decreaseDate}> Previous Date </button>
                <button onClick={increaseDate}> Next Date </button>

                <EventVisualizer event={events.filter(event => event.date === date)[0]} />
            </div>
        </div>
    )

}