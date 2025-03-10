import {CenteredLink, Container, Title} from "./Components";
import SocialMediaPanel from "../../components/SocialMediaPanel";
import {LINKTREE_LINKS} from "../../config";
import TriangleLogo from "../../components/TriangleLogo";
import { SpacerElement } from "../../components/PageElements";

function Linktree() {
    return(
        <Container>
            <TriangleLogo size={20}/>
            <Title>Entropy Hill</Title>
            {LINKTREE_LINKS.map(({label, url}) => (
                <CenteredLink href={url} key={url}>{label}</CenteredLink>
            ))}
            <SpacerElement />
            <SocialMediaPanel/>
        </Container>
    )
}

export default Linktree