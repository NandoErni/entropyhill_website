import {SocialMediaContainer, SocialMediaLink} from "../pages/Home/Components";

function SocialMediaPanel({isBig}) {
    return (
        <SocialMediaContainer>
            <SocialMediaLink url="https://www.instagram.com/entropy_hill" seconds={1.5} isBig={isBig}/>
            <SocialMediaLink url="https://www.bandsintown.com/a/15505028-entropy-hill" seconds={1.8} isBig={isBig}/>
            <SocialMediaLink url="mailto:nando.erni@outlook.de" seconds={2.1} isBig={isBig}/>
        </SocialMediaContainer>
    )
}

export default SocialMediaPanel