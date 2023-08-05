import SocialMediaLink, {SocialMediaContainer} from "./SocialMediaLink";


function SocialMediaPanel({isBig}) {
    return (
        <SocialMediaContainer>
            <SocialMediaLink url="https://www.instagram.com/entropy_hill" seconds={1} isBig={isBig}/>
            <SocialMediaLink url="https://www.bandsintown.com/a/15505028-entropy-hill" seconds={1.3} isBig={isBig}/>
            <SocialMediaLink url="mailto:nando.erni@outlook.de" seconds={1.6} isBig={isBig}/>
        </SocialMediaContainer>
    )
}

export default SocialMediaPanel