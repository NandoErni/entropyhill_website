import image from '../../img/bandx/bandx_3.jpg'
import {FullScreenImg, CenteredMainTitle, SocialMediaContainer, FadeInContainer} from "./Components";
import SocialMediaPanel from "../../components/SocialMediaPanel";

function HomePage() {
    return (
        <>
            <FullScreenImg src={image}/>
            <FadeInContainer>
                <CenteredMainTitle>Entropy Hill</CenteredMainTitle>
            </FadeInContainer>
            <SocialMediaPanel />
        </>
    )
}

export default HomePage