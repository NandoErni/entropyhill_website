import {Card, CardEmbeddedPlayer, CardContent, CardImage, SubtitleContainer, TitleContainer} from "./Components";
import {SocialIcon} from "react-social-icons";


function MusicCard({title, coverImage, links}) {

    return (
        <Card>
            <CardEmbeddedPlayer>
                <iframe 
                src={links.spotifyEmbedded}
                width="100%" height="352" frameBorder="0" allowFullScreen="" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"/>
            </CardEmbeddedPlayer>
            <CardContent>
                <TitleContainer>{title}</TitleContainer>
                <SubtitleContainer>Listen Now!</SubtitleContainer>
                <SubtitleContainer>
                    <SocialIcon target="_blank"  style={{margin: "0 10px", height: '50px', width: '50px'}}
                                network="spotify" url={links.spotify} fgColor="#ffffff" label="Spotify"/>
                    <SocialIcon target="_blank"  style={{margin: "0 10px", height: '50px', width: '50px'}}
                                network="itunes" url={links.apple} fgColor="#ffffff" label="iTunes"/>
                </SubtitleContainer>
            </CardContent>
        </Card>
    )
}

export default MusicCard