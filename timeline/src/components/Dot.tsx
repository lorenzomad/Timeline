import './Dot.css'
interface IProps {
    coordinates: [number, number]
}

export const Dot = ({coordinates}: IProps) => {

    // format is [Y, X]
    // rome is [ -205px, 5px] translation and 
    // the center is [-120px, -15px ]
    //                        X   Y
    const romeTranslate = [ -199, 2]
    const centerTranslate = [-120 , -15]
    // to calculate the displacement factor we have the coordinates of Rome 
    const romeCoordinates= [41.90637617791866, 12.485169024460625]

    const translationFactorY = (romeTranslate[0] - centerTranslate[0]) / romeCoordinates[0]  
    const translationFactorX = (romeTranslate[1] - centerTranslate[1]) / romeCoordinates[1]   
    

    const x = centerTranslate[1] + (coordinates[1] * translationFactorX)
    const y = centerTranslate[0] + (coordinates[0] * translationFactorY)

    console.log(x)
    console.log(y)

    return (
        


        <div className="dot"style={{
            transform: `translate(${x}px,${y}px)`
        }}>
            
        </div>

    )
}