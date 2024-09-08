import { Container, Title, Stat, StatLink, Stats, SubSubTitle, SubTitle, Biography, Member, Members, FlexContainer, Image, ImageGallery, Diskography, Song, SongAudio, SongCoverArt, SongTitle } from "./Components";
import { MUSIC_ENTRIES } from "../../config"
import { useState } from "react";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

function ElectronicPressKit() {
    const [index, setIndex] = useState(-1);

    const images = [
        { src: "https://entropyhill.com/media/img/band/wall_portrait.jpeg", width: 4000, height: 6000 },
        { src: "https://entropyhill.com/media/img/band/wall_landscape.jpeg", width: 6000, height: 4000 },
        { src: "https://entropyhill.com/media/img/band/outside.jpeg", width: 6000, height: 4000 },
        { src: "https://entropyhill.com/media/img/band/stairs.jpeg", width: 3888, height: 5856 },

    ];
    const memberImages = [
        { src: "https://entropyhill.com/media/img/band/single/bruno.png", width: 550, height: 550, memberName: "Bruno Bender" },
        { src: "https://entropyhill.com/media/img/band/single/lisa.png", width: 550, height: 550, memberName: "Lisa Schifferle" },
        { src: "https://entropyhill.com/media/img/band/single/nando.png", width: 550, height: 550, memberName: "Nando Erni" },
        { src: "https://entropyhill.com/media/img/band/single/tiziano.png", width: 550, height: 550, memberName: "Tiziano Sommacal" },
    ];
    return (
        <Container>
            <Title>Entropy Hill</Title>
            <SubTitle>Electronic Press Kit</SubTitle>
            <br /><hr /><br /><br />
            <FlexContainer>
                <Image src={"https://entropyhill.com/media/img/band/wall_landscape.jpeg"} />
                <Stats>
                    <Stat>Entropy Hill</Stat>
                    <Stat>Founded in 2021</Stat>
                    <Stat>Entropic Wave Music</Stat>
                    <Stat><StatLink href="https://mx3.ch/entropyhill" target="_blank">MX3</StatLink></Stat>
                    <Stat>
                        <StatLink href="https://www.instagram.com/entropy_hill/" target="_blank">Instagram</StatLink>,&nbsp;
                        <StatLink href="https://www.facebook.com/entropyhillband/" target="_blank">Facebook</StatLink>,&nbsp;
                        <StatLink href="https://www.bandsintown.com/de/a/15505028-entropy-hill" target="_blank">Bandsintown</StatLink>
                    </Stat>
                    <Stat>
                        <StatLink href="https://open.spotify.com/artist/4APfaKKTUYeoETKFP4HCTy" target="_blank">Spotify</StatLink>,&nbsp;
                        <StatLink href="https://music.apple.com/us/artist/entropy-hill/1713019741" target="_blank">Apple Music</StatLink>
                    </Stat>
                    <Stat>Appeared on <StatLink href="https://www.lora.ch/radio/ausgaben/ch-block-dj-leo-2023-12-22" target="_blank">Radio LoRa</StatLink></Stat>
                    <Stat><StatLink href="https://entropyhill.com" target="_blank">Website</StatLink></Stat>
                </Stats>
            </FlexContainer>
            <FlexContainer>
                <Members>
                    <SubSubTitle>Members</SubSubTitle>

                    <RowsPhotoAlbum
                        photos={memberImages}
                        targetRowHeight="300"
                        render={{
                            // render image selection icon
                            extras: (_, { index }) => (
                                <Member>{memberImages[index].memberName}</Member>
                            ),
                        }}
                    />
                    {/* <Member>Lisa Schifferle</Member>
                    <Member>Nando Erni</Member>
                    <Member>Bruno Bender</Member>
                    <Member>Tiziano Sommacal</Member> */}
                </Members>
                <Biography>
                    <SubSubTitle>Biography</SubSubTitle>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                    laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                    architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                    sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                    <br />
                    <br />
                    voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                    consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
                    magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
                    voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                    consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
                    magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
                    <br />
                    <br />
                    corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure
                    reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui
                    dolorem eum fugiat quo voluptas nulla pariatur?
                    corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure
                    reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui
                    dolorem eum fugiat quo voluptas nulla pariatur?
                    <br />
                    <br />
                    corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure
                    reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui
                    dolorem eum fugiat quo voluptas nulla pariatur?
                </Biography>
            </FlexContainer>
            <SubSubTitle>Images</SubSubTitle>
            <ImageGallery>
                <RowsPhotoAlbum
                    photos={images}
                    onClick={({ index: current }) => window.open(images[current].src, "_blank")}
                    targetRowHeight="300"
                />
            </ImageGallery>
            <SubSubTitle>Discography</SubSubTitle>
            <Diskography>
                {MUSIC_ENTRIES.map((entry, i) => (
                    <>
                        <Song key={i}>
                            <SongTitle>{entry.title}</SongTitle>
                            <audio controls><SongAudio src={entry.musicFile} /></audio>
                            <SongCoverArt href={entry.coverImage} target="_blank">Cover Art</SongCoverArt>
                        </Song>
                        <hr />
                    </>
                ))}
            </Diskography>


        </Container>
    )
}

export default ElectronicPressKit