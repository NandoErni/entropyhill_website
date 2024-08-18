import {Container, FullScreenImg, SpacerElement, SubTitle, Title} from "../../components/PageElements";
import ShowCard from "./ShowCard";
import useShowFetcher from "../../hooks/UseShowFetcher"
import {useEffect} from "react";
import image from "../../img/bandx/bandx_1.jpg";

function ShowsPage() {
    const [shows, fetchShows] = useShowFetcher("EntropyHill")
    const [pastShows, fetchPastShows] = useShowFetcher("EntropyHill")
    const fetchOnlyPastShows = () => fetchPastShows(true)

    useEffect(() => {
        fetchShows()
            .catch(err => {
                console.log(err)
            })
        fetchOnlyPastShows()
            .catch(err => {
                console.log(err)
            })
    }, [])

    return(
        <>
            <FullScreenImg src={image}/>
            <Container>

                <Title>Upcoming Shows</Title>

                {shows.length > 0 ?
                    shows.map((entry, i) =>
                        (
                            <ShowCard datetime={new Date(entry["datetime"])}
                                      venue={entry["venue"]["name"]}
                                      location={entry["venue"]["city"]}
                                      linkForMore={entry["url"].split("?")[0]}
                                      key={i}/>
                        )
                    ) : (<SubTitle>No upcoming Shows currently...</SubTitle>)
                }

                <Title>Past Shows</Title>

                {pastShows.length > 0 ?
                    pastShows.toReversed().map((entry, i) =>
                        (
                            <ShowCard datetime={new Date(entry["datetime"])}
                                    venue={entry["venue"]["name"]}
                                    location={entry["venue"]["city"]}
                                    linkForMore={entry["url"].split("?")[0]}
                                    key={i}/>
                        )
                    ) : (<SubTitle>No past Shows currently...</SubTitle>)
                }
                <SpacerElement />
            </Container>
        </>
    )
}

export default ShowsPage