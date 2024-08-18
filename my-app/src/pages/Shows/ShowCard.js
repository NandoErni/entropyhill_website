import {Card, DateContainer, Link, LocationContainer, VenueContainer} from "./Components";

function ShowCard({datetime, venue, location, linkForMore}) {
    const options =
        { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' };

    return (
        <Card>
            <Link href={linkForMore} target={'_blank'}>
                
                <DateContainer>
                    {datetime.toLocaleDateString("de-CH", options)}
                </DateContainer>
                <VenueContainer>
                    {venue}
                </VenueContainer>
                <LocationContainer>
                    {location}
                </LocationContainer>
            </Link>
        </Card>
    )
}

export default ShowCard