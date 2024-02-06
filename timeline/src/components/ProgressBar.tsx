import './ProgressBar.css'


interface IProps {
    percentage : number
    date: Date
}

export const ProgressBar = ({percentage, date} : IProps) => {
    
    // date offset to make it centered on the line:
    const dateOffset = (percentage * 100) - 1

    return (
        <div className='container'>
            <div className="progress-bar">
                <div className="fill" style={{height: `${percentage * 100}%`}}>

                </div>
            </div>
            <p className='date' style={{transform: `translateY(${dateOffset}%)` }}>
                {date.toDateString()}
            </p>
        </div>
    )
}