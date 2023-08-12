import {Container, SubTitle, Title} from "../../components/PageElements";
import ShowCard from "./ShowCard";
import useShowFetcher from "../../hooks/UseShowFetcher"
import {useEffect} from "react";
import {FullScreenImg} from "../Home/Components";
import image from "../../img/bandx/bandx_1.jpg";

function ShowsPage() {
    const [shows, fetchShows] = useShowFetcher("EntropyHill")

    useEffect(() => {
        fetchShows()
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
                    ) : (<SubTitle>No Shows currently...</SubTitle>)
                }
            </Container>
        </>
    )
}

export default ShowsPage