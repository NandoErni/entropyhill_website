import styled from 'styled-components'
import {SocialIcon} from "react-social-icons";


export function SocialMediaLink({url, seconds, isBig}) {
    const size = isBig ? '100px' : '50px'
    return (
        <FadeInContainer seconds={seconds}>
            <SocialIcon style={{margin: "0 10px", height: size, width: size}} url={url} fgColor="#ffffff"/>
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
`

export const FullScreenImg = styled.img`
  flex: 1;
  width: 100%;
  height: 100%;
  filter: brightness(50%);
`

export const CenteredMainTitle = styled.div`
  
  margin: 0;
  color: white;
  text-align: center;
  font-size: 150px;
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const FadeInContainer = styled.div`
  @keyframes fadeIn {
    from {
      opacity:0;
    }

    to {
      opacity:1;
    }
  }
  
  opacity: 0;

  animation: fadeIn 0.7s ease-in;
  animation-delay: ${p => 
          p.seconds === undefined ? "1s" : p.seconds + "s"};
  animation-fill-mode: forwards;
`