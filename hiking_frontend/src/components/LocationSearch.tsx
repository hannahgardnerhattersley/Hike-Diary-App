import { useState } from "react"
import { HikeLocation } from "./types"
import { FunctionComponent } from "react"

let baseURL = "http://localhost:8000/api"

// if (process.env.NODE_ENV === 'development') {
//     baseURL = 'http://localhost:3003';
// } else {
//     // "https://morning-river-69185.herokuapp.com/" in this case is the *API* url
//     baseURL = 'https://morning-river-69185.herokuapp.com';
// }

interface LocationSearchProps {
    locations: HikeLocation[];
    setLocations: (f: HikeLocation[]) => void;
}


export const LocationSearch: FunctionComponent<LocationSearchProps> = ({locations, setLocations}) => {
    // STATE //
    const [locationString, setLocationString] = useState("")

    // HOOKS //


    // API REQ //
    const getRecommendation = (e: React.FormEvent<HTMLFormElement>) => {
        const url = `${baseURL}/location_search?location_string=${encodeURIComponent(locationString)}`
        e.preventDefault()
        console.log(url)
        fetch(url)
            .then(data => {return data.json()}, error => console.log(error))
            .then(parsedData => {
                const newLocation: HikeLocation = {
                    hike_name: parsedData["candidates"][0]['name'],
                    hike_address: parsedData["candidates"][0]["formatted_address"],
                    hike_lat: Number(parsedData["candidates"][0]["geometry"]["location"]["lat"]),
                    hike_lng: Number(parsedData["candidates"][0]["geometry"]["location"]["lng"]),
                    hike_img: parsedData["candidates"][0]["photos"][0]["photo_reference"],
                }
                setLocations([...locations, newLocation])
                setLocationString("")
            }, error => console.log(error))
    }

    return (
        <form onSubmit = {getRecommendation}>
            <input type = "text" id = "location_string" name = "location_string" onChange = {e => setLocationString(e.target.value)} value = {locationString} />
            <input type = "submit" value = "Search"/>
        </form>
    )
}