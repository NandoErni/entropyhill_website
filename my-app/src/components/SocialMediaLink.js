import {SocialIcon} from "react-social-icons";
import styled from "styled-components";
import {FadeInContainer} from "../pages/Home/Components";


function SocialMediaLink({url, seconds, isBig, network}) {
    const size = isBig ? '100px' : '50px'
    return (
        <FadeInContainer seconds={seconds}>
            <SocialIconWrapper style={{margin: "10px"}}>
                <SocialIcon style={{height: size, width: size}}
                            network={network} url={url} fgColor="#ffffff" label="icon"/>
            </SocialIconWrapper>
        </FadeInContainer>
    )
}

export const SocialMediaContainer = styled.div`
  margin-top: 50px;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`

const SocialIconWrapper = styled.div`
  transition: all .2s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
  display: inline-block;
`

export default SocialMediaLink