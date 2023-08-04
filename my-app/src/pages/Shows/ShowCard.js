import {Card, DateContainer, Link, LocationContainer, VenueContainer} from "./Components";

function ShowCard({datetime, venue, location, linkForMore}) {
    const options =
        { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' };

    return (
        <Card>
            <div style={{width: '70%', height: '100%', float: 'left'}}>
                <DateContainer>
                    {datetime.toLocaleDateString("de-CH", options)}
                </DateContainer>
                <VenueContainer>
                    {venue}
                </VenueContainer>
                <LocationContainer>
                    {location}
                </LocationContainer>
            </div>

            <div style={{width: '30%', height: '100%', display: 'flex', float: 'right', textAlign: 'center', justifyContent: "center"}}>

                <Link href={linkForMore} target={'_blank'}>
                    More
                </Link>
            </div>
        </Card>
    )
}

export default ShowCard