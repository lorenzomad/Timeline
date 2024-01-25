import './ProgressBar.css'


interface IProps {
    percentage : number
}

export const ProgressBar = ({percentage} : IProps) => {
    
    
    return (
        <div className="container">
            <div className="fill" style={{height: `${percentage * 100}%`}}>

            </div>
        </div>
    )
}