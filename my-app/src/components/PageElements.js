import styled from "styled-components";


export const CenteredChildrenContainer = styled.div`
  text-align: center;
  justify-content: center;
  gap: 50px;
  display: flex;
  flex-wrap: wrap;
  
`

export const Container = styled.div`
  height: 100dvh;
  width: 100vw;
  margin: 0;
  position: absolute;
  top: 0;
  left: 0;
  color: white;
  background-color: transparent;
  overflow-y: auto;

`

export const ColoredBackgroundContainer = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(-45deg, #F2271Eff, #FDAC0Eff);
  background-size: 500% 500%;
  animation: gradient 15s ease infinite;

  @keyframes gradient {
    0% {
      background-position: 10% 10%;
    }
    50% {
      background-position: 100% 100%;
    }
    100% {
      background-position: 10% 10%;
    }
  }
`

export const Title = styled.h1`
  text-align: center;
  padding-top: 10%;
  color: white;
  font-size: 3rem;
  margin-bottom: 60px;
`

export const SubTitle = styled.div`
  text-align: center;
  padding-top: 100px;
  color: white;
  font-size: 1.5rem;
  margin-bottom: 60px;
`


export const FullScreenImg = styled.img`
  
  background-position: left;
  background-size: inherit;
  filter: brightness(50%);

  @media only screen and (orientation: landscape) {
    width: 100vw;
  }

  @media only screen and (orientation: portrait) {
    height: 100dvh;
  }
`

export const SpacerElement = styled.div`

height: 10%;
@media only screen and (max-width: 768px) {
    /* For mobile: */
    height: 25%;
  }
`