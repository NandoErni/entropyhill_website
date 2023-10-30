import {Card, CardContent, CardImage, SubtitleContainer, TitleContainer} from "./Components";
import {SocialIcon} from "react-social-icons";


function MusicCard({title, coverImage, links}) {

    return (
        <Card>
            <CardImage src={coverImage}/>

            <CardContent>
                <TitleContainer>{title}</TitleContainer>
                <SubtitleContainer>Listen Now!</SubtitleContainer>
                <SubtitleContainer>
                    <SocialIcon style={{margin: "0 10px", height: '50px', width: '50px'}}
                                network="spotify" url={links.spotify} fgColor="#ffffff" label="Spotify"/>
                    <SocialIcon style={{margin: "0 10px", height: '50px', width: '50px'}}
                                network="itunes" url={links.apple} fgColor="#ffffff" label="iTunes"/>
                </SubtitleContainer>
            </CardContent>
        </Card>
    )
}

export default MusicCard