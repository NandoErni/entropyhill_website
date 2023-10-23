import image from '../../img/bandx/bandx_4.jpg'
import {CenteredLogo, CenteredMainTitle, FadeInContainer} from "./Components";
import SocialMediaPanel from "../../components/SocialMediaPanel";
import {FullScreenImg} from "../../components/PageElements";
import TriangleLogo from "../../components/TriangleLogo";

function HomePage() {
    return (
        <>
            <FullScreenImg src={image}/>
            <SocialMediaPanel />
            <FadeInContainer>
                <CenteredMainTitle><TriangleLogo size={50}/></CenteredMainTitle>
            </FadeInContainer>
            <FadeInContainer seconds={2}>
                <CenteredMainTitle>Entropy Hill</CenteredMainTitle>
            </FadeInContainer>
        </>
    )
}

export default HomePage