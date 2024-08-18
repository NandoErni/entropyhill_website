import SocialMediaLink, {SocialMediaContainer} from "./SocialMediaLink";
import {SOCIAL_MEDIA_ACCOUNTS} from "../config"


function SocialMediaPanel({isBig}) {
    return (
        <SocialMediaContainer>
            {
                SOCIAL_MEDIA_ACCOUNTS.map(({network, url}, i) => (
                    
                    <SocialMediaLink key={i} url={url} network={network} seconds={1 + i * 0.3} isBig={isBig}/>
                ))
            }
        </SocialMediaContainer>
    )
}

export default SocialMediaPanel