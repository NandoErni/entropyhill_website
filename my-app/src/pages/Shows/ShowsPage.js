import {Container, Title} from "../../components/PageElements";
import ShowCard from "./ShowCard";
import useShowFetcher from "../../hooks/UseShowFetcher"

function ShowsPage() {
    const [shows, fetchShows] = useShowFetcher("EntropyHill")

    return(
        <Container>
            <Title>Upcoming Shows</Title>

            {shows.map((entry, i) =>
                (
                    <ShowCard datetime={new Date(entry["datetime"])}
                              venue={entry["venue"]["name"]}
                              location={entry["venue"]["city"]}
                              linkForMore={entry["url"]}
                              key={i}/>
                )
            )}
        </Container>
    )
}

export default ShowsPage