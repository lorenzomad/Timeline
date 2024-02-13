import { Event } from "../types/types"
import world_map from "../assets/world_map.svg"
import { Dot } from "./Dot"
import './WorldMap.css'

interface IProps {
    event: Event
}

export const WorldMap = ({event}: IProps) => {
    const coordinates = event.coordinates

    return (
        <div className="worldmap">
            <img src={world_map} />
            <Dot coordinates={coordinates} />
        </div>
    )

}