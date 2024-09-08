import styled from "styled-components";

export const Container = styled.div`
  background-color: #202020;
  color: white;
  min-height: 100vh;
  max-width: 100vw;
  padding: 40px 10px;
  font-weight: lighter;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
`;

export const FlexContainer = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Title = styled.h1`
  margin: auto;
  width: 100%;
  text-align: center;
  padding: 20px 0;
  font-size: 2.5rem;
  font-weight: lighter;
  letter-spacing: 0.8rem;
`;

export const SubTitle = styled.h2`
  margin: auto;
  width: 100%;
  text-align: center;
  font-size: 1.5rem;
  letter-spacing: 0.2rem;
  text-transform: uppercase;

  &:after {
    content: " -";
  }

  &:before {
    content: "- ";
  }
`;

export const SubSubTitle = styled.h3`
  margin: 30px auto 0px auto;
  width: 100%;
  text-align: center;
  padding: 20px 0;
  font-size: 1.4rem;
`;

export const Image = styled.img`
  object-fit: contain;
  flex: 1;
  min-width: 250px;
  min-height: 0%;
`;

export const Stats = styled.ul`
  flex: 1;
  font-size: 1.5rem;
  align-self: center;
  margin: 20px;
  list-style-type: circle;
  min-width: 250px;
`;

export const Stat = styled.li`
  margin: 10px 0;
`;

export const StatLink = styled.a`
  color: white;
`;

export const Members = styled.div`
  flex: 1;
  align-self: center;
  margin: 20px;
  min-width: 250px;
`;

export const Member = styled.div`
  text-align: center;
  position: absolute;
  top: 70%;
  left: 50%;
  background-color: #00000070;
  width: 100%;
  padding: 5px;

  transform: translate(-50%, -50%);
`;

export const Biography = styled.div`
  flex: 3;
  text-align: justify;
  margin: 20px;
  min-width: 250px;
`;

export const ImageGallery = styled.div`
  max-width: 80%;
  margin: auto;
`;
export const Diskography = styled.div`
  max-width: 60%;
  margin: auto;

  @media only screen and (max-width: 768px) {
    /* For mobile: */
    max-width: 100%;
  }
`;
export const Song = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  margin: 30px 0;
`;

export const SongTitle = styled.div`
  flex: 1;
  margin: auto 10px;
`;
export const SongAudio = styled.source`
  flex: 5;
  margin: auto 10px;
`;
export const SongCoverArt = styled.a`
  flex: 1;
  color: white;
  margin: auto 10px;
  white-space: nowrap;
`;
