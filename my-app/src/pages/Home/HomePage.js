import image from '../../img/bandx/bandx_4.jpg'
import {CenteredLogo, CenteredMainTitle, FadeInContainer} from "./Components";
import SocialMediaPanel from "../../components/SocialMediaPanel";
import {FullScreenImg} from "../../components/PageElements";
import TriangleLogo from "../../components/TriangleLogo";

function HomePage() {
    return (
        <>
            <FullScreenImg src={image}/>
            <FadeInContainer>
                <CenteredMainTitle><TriangleLogo size={50}/></CenteredMainTitle>
            </FadeInContainer>
            {/*<FadeInContainer seconds={2}>*/}
            {/*    <CenteredMainTitle>Entropy Hill</CenteredMainTitle>*/}
            {/*</FadeInContainer>*/}

            <div style={{
                position: "absolute",
                bottom: "15vh",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "100vw"
            }}>
                <SocialMediaPanel />
            </div>
        </>
    )
}

export default HomePage