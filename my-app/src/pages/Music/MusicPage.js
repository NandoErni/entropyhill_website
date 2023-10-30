import {CenteredChildrenContainer, Container, FullScreenImg, Title} from "../../components/PageElements";
import image from "../../img/bandx/bandx_2.jpg";
import MusicCard from "./MusicCard";
import {MUSIC_ENTRIES} from "../../config";

function MusicPage() {

    return(
        <>
            <FullScreenImg src={image}/>
            <Container>
                <Title>Music</Title>
                <CenteredChildrenContainer>

                    {MUSIC_ENTRIES.map((entry, i) => (
                        <MusicCard title={entry.title}
                                   coverImage={entry.coverImage}
                                   links={entry.links}
                                   key={i}/>
                    ))}

                </CenteredChildrenContainer>
            </Container>
        </>
    )
}

export default MusicPage