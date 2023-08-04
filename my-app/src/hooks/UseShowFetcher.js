import {useState} from "react";
import {sampleEvents} from "./Data";


function useShowFetcher(artistName) {
    const [shows, setShows] = useState([])

    async function fetchShows() {
        setShows(sampleEvents)
    }

    if (shows.length === 0) {
        fetchShows()
    }

    return [shows, fetchShows]
}

export default useShowFetcher