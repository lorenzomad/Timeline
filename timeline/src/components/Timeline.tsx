import { useState } from "react"
import { ProgressBar } from "./ProgressBar"
import { EventVisualizer } from "./EventVisualizer"
import { events } from "../data/events_data"
import { differenceInDays } from "../utils/datefunction"
import './Timeline.css'
import { colors } from "../data/notebook_colors"

interface IProps {
    dates: Date []
}

export const Timeline = ({dates}: IProps) => {

    // current index to scroll through the dates
    const [index, setIndex] = useState(0)

    //appear animation
    const appearAnimation = () => {
        // this is a bit of a hack, probably would need to use useeffect here
        let page: Element;
        setTimeout(() => {
            page = document.getElementsByClassName('page')[0]
            page.className += ' appear'
        }, 1);
        setTimeout(() => {
            page.className = page.className.replace(' appear', '')
        }, 1000);
    }

    appearAnimation()

    const date = dates[index]
    const startDate = dates[0]
    const endDate = dates[dates.length - 1]
    const totalDays = differenceInDays(startDate, endDate)

    const days_passed = differenceInDays(startDate, date)

    const percentage_passed = days_passed / totalDays    

    const nextPage  = () => {
        const page = document.getElementsByClassName("page")[0]
        page.className += ' disappear'
        setTimeout(() => {
            increaseDate()    
            page.className = page.className.replace('disappear', 'appear')
        }, 1000);
        setTimeout(() => {
            page.className= page.className.replace(' appear', '')
        }, 1000);
    }

    const previousPage = () => {
        const page = document.getElementsByClassName("page")[0]
        page.className += ' disappear'
        setTimeout(() => {
            decreaseDate()    
            page.className = page.className.replace('disappear', 'appear')
        }, 1000);
        setTimeout(() => {
            page.className= page.className.replace(' appear', '')
        }, 1000);
    }

    const decreaseDate = () => {
        setIndex(index !== 0 ? index - 1 : 0)
    }

    const increaseDate = () => {
        setIndex(index !== dates.length - 1 ? index + 1 : dates.length - 1)
    }

    //pick colors in sequential order out of the list 
    const color = colors[index % colors.length]

    return (
        <div className="layout">
            <ProgressBar percentage =  {percentage_passed}/>
        
            <div className="page" style={{backgroundColor: color}}>
                <div className="holes"></div>
                <button className="previous" onClick={previousPage}> Previous Date </button>
                <button className="next" onClick={nextPage}> Next Date </button>
                <div className="pattern">
                    <EventVisualizer event={events.filter(event => event.date === date)[0]} />
                </div>
            </div>
        </div>
    )

}