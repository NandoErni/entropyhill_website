import {SocialIcon} from "react-social-icons";
import styled from "styled-components";
import {FadeInContainer} from "../pages/Home/Components";


function SocialMediaLink({url, seconds, isBig}) {
    const size = isBig ? '100px' : '50px'
    return (
        <FadeInContainer seconds={seconds}>
            <SocialIconWrapper>
                <SocialIcon style={{margin: "0 10px", height: size, width: size}} url={url} fgColor="#ffffff"/>
            </SocialIconWrapper>
        </FadeInContainer>
    )
}

export const SocialMediaContainer = styled.div`
  color: white;
  text-align: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 768px) {
    /* For mobile: */
    bottom: 20%;
  }
`

const SocialIconWrapper = styled.div`
  transition: all .2s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`

export default SocialMediaLink