import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  
  background: linear-gradient(-45deg, #F2271Eff, #FDAC0Eff, #FDAC0Eff, #F2271Eff);
  background-size: 150% 150%;
  animation: gradient 15s ease infinite;

  @keyframes gradient {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 100% 100%;
    }
    100% {
      background-position: 0 0;
    }
  }
`

export const Title = styled.h1`
  margin: auto;
  width: 100%;
  text-align: center;
  padding: 20px 0;
  color: white;
  font-size: 2.5rem;
`

export const CenteredLink = styled.a`
  margin: auto auto 20px;
  text-decoration: none;
  background: #30303070;
  color: white;
  border-radius: 30px;
  width: 80%;
  padding: 20px;
  text-align: center;
  font-weight: bolder;
  display: block;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  -webkit-transition: background-color 120ms linear;
  -ms-transition: background-color 120ms linear;
  transition: background-color 120ms linear;

  &:hover {
    background: #4a4a4a70;
    cursor: pointer;
  }
`