import styled from "styled-components";

const DotsContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  z-index: 10;
  width: 100vw;
  bottom: 0;
  margin: 20px;
`

const Dot = styled.div`
  height: 10px;
  width: 10px;
  border: 2px solid #ffffff99;

  background-color: ${(props) => props.selected ? '#ffffff' : 'transparent'};
  border-radius: 10px;
  margin: 3px;
  z-index: 10;
  -webkit-transition: background-color 200ms linear;
  -ms-transition: background-color 200ms linear;
  transition: background-color 200ms linear;

  &:hover {
    background: #6a6a6a;
  }
`

function Dots({numberOfPages, currentPage, onClickHandler}) {
    return (
        <DotsContainer>
            {[...Array(numberOfPages)].map((e, i) =>
                <Dot onClick={() => onClickHandler(i)} selected={i === currentPage} key={i}/>)}
        </DotsContainer>
    )
}

export default Dots