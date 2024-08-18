import {useState} from "react";
import {BANDS_IN_TOWN_APP_ID} from "../config";

const BASE_URL = "https://rest.bandsintown.com"
const EVENTS_URL = "/artists/Entropy%20Hill/events"

function getEventsUrl(app_id, onlyUpcomingEvents) {
    return BASE_URL + EVENTS_URL + "?app_id=" + app_id + "&date=" + (onlyUpcomingEvents ? "upcoming" : "past")
}


function useShowFetcher(artistName) {
    const [shows, setShows] = useState([])

    async function fetchShows() {
        const eventsResponse = await fetch(getEventsUrl(BANDS_IN_TOWN_APP_ID, false))
        const events = await eventsResponse.json()
        setShows(events)
    }

    return [shows, fetchShows]
}

export default useShowFetcher