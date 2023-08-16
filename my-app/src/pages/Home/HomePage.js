import image from '../../img/bandx/bandx_4.jpg'
import {CenteredMainTitle, FadeInContainer} from "./Components";
import SocialMediaPanel from "../../components/SocialMediaPanel";
import {FullScreenImg} from "../../components/PageElements";

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