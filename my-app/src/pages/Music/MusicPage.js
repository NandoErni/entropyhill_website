import { CenteredChildrenContainer, Container, FullScreenImg, SpacerElement, Title } from "../../components/PageElements";
import image from "../../img/bandx/bandx_2.jpg";
import MusicCard from "./MusicCard";
import { MUSIC_ENTRIES } from "../../config";

function MusicPage() {

    return (
        <>
            <FullScreenImg src={"https://entropyhill.com/media/img/band/wall_landscape.jpeg"} />
            <Container>
                <Title>Music</Title>
                <CenteredChildrenContainer>

                    {MUSIC_ENTRIES.filter(entry => entry.isReleased).reverse().map((entry, i) => (
                        <MusicCard title={entry.title}
                            coverImage={entry.coverImage}
                            links={entry.links}
                            key={i} />
                    ))}

                </CenteredChildrenContainer>
                <SpacerElement />
            </Container>
        </>
    )
}

export default MusicPage