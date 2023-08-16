import {CenteredLink, Container, Title} from "./Components";
import SocialMediaPanel from "../../components/SocialMediaPanel";
import {LINKTREE_LINKS} from "../../config";

function Linktree() {
    return(
        <Container>
            <Title>Entropy Hill</Title>
            {LINKTREE_LINKS.map(({label, url}) => (
                <CenteredLink href={url} key={url}>{label}</CenteredLink>
            ))}
            <SocialMediaPanel/>
        </Container>
    )
}

export default Linktree