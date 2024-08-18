import styled from 'styled-components'

export const Card = styled.div`
  margin: 40px auto;
  color: white;
  background: #30303070;
  padding: 20px;
  min-height: 100px;
  max-height: 600px;
  min-width: 50%;
  max-width: 80%;
  cursor: pointer;
  box-shadow: 0 4px 80px 0 rgba(0, 0, 0, 0.8), 0 60px 200px 0 rgba(0, 0, 0, 0.8);

  -webkit-transition: background-color 120ms linear;
  -ms-transition: background-color 120ms linear;
  transition: background-color 120ms linear;
  &:hover {
    background: #4a4a4a70;
  }
`

export const DateContainer = styled.div`
  font-size: 0.8rem;
  font-style: italic;
`

export const CallToActionContainer = styled.div`
  font-size: 1rem;
  font-style: italic;
  color: #ffffffA0;
`

export const LocationContainer = styled.div`
  font-size: 0.9rem;
`

export const VenueContainer = styled.div`
  font-size: 1.6rem;
  padding-top: .5em;
  padding-bottom: .3em;
`

export const Link = styled.a`
  text-decoration: none;
  color: inherit;
  outline: 0;
  cursor: pointer;
`