import styled from 'styled-components'

export const Card = styled.div`
  margin: 40px auto;
  background: #404040;
  color: white;
  border-radius: 10px;
  padding: 20px;
  height: 100px;
  width: 600px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  -webkit-transition: background-color 120ms linear;
  -ms-transition: background-color 120ms linear;
  transition: background-color 120ms linear;
  &:hover {
    background: #4a4a4a;
  }
`

export const DateContainer = styled.div`
  font-size: 0.8em;
  font-style: italic;
`

export const LocationContainer = styled.div`
  font-size: 0.9em;
`

export const VenueContainer = styled.div`
  font-size: 1.6em;
  padding-top: .5em;
  padding-bottom: .3em;
`

export const Link = styled.a`
  margin: auto;
  color: white;
  text-decoration: none;
  border: 2px solid grey;
  border-radius: 7px;
  padding: 10px;

  -webkit-transition: background-color 100ms linear;
  -ms-transition: background-color 100ms linear;
  transition: background-color 100ms linear;
  &:hover {
    background: gray;
  }
`