import styled from 'styled-components'
import {SocialIcon} from "react-social-icons";

export const Card = styled.div`
  margin: 40px auto;
  background: #30303070;
  color: white;
  box-shadow: 0 4px 80px 0 rgba(0, 0, 0, 0.8), 0 60px 200px 0 rgba(0, 0, 0, 0.8);
  display: inline-block;

  -webkit-transition: background-color 120ms linear;
  -ms-transition: background-color 120ms linear;
  transition: background-color 120ms linear;
  &:hover {
    background: #4a4a4a70;
  }
`

export const CardImage = styled.img`
  max-height: 50vh;
  max-width: 70vw;
`

export const CardContent = styled.div`
  padding: 10px;
`

export const SubtitleContainer = styled.div`
  font-size: 0.9rem;
  margin-bottom: 15px;
`

export const TitleContainer = styled.div`
  font-size: 1.6rem;
  padding-top: .5em;
  padding-bottom: .3em;
`