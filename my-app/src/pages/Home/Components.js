import styled from 'styled-components'

export const FullScreenImg = styled.img`
  height: 100%;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: brightness(50%);
`

export const CenteredMainTitle = styled.div`
  margin: 0;
  color: white;
  text-align: center;
  font-size: 5rem;
  position: absolute;
  width: 100%;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-shadow: 5px 5px 5px black;
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
          p.seconds === undefined ? "0.5s" : p.seconds + "s"};
  animation-fill-mode: forwards;
`