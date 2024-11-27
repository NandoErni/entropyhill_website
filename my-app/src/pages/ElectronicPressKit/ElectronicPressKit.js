import { Container, ReleaseDate, Title, Stat, StatLink, Stats, SubSubTitle, SubTitle, Biography, Member, Members, FlexContainer, Image, ImageGallery, Diskography, Song, SongAudio, SongResourceLink, SongTitle } from "./Components";
import { MUSIC_ENTRIES } from "../../config"
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

const dateOptions =
    { year: 'numeric', month: 'numeric', day: 'numeric' };

function ElectronicPressKit() {
    const images = [
        { src: "https://entropyhill.com/media/img/band/wall_portrait.jpeg", width: 4000, height: 6000, title: "Photo by Timon Weder" },
        { src: "https://entropyhill.com/media/img/band/wall_landscape.jpeg", width: 6000, height: 4000, title: "Photo by Timon Weder" },
        { src: "https://entropyhill.com/media/img/band/outside.jpeg", width: 6000, height: 4000, title: "Photo by Timon Weder" },
        { src: "https://entropyhill.com/media/img/band/regejacke.jpeg", width: 6000, height: 4000, title: "Photo by Timon Weder" },
        { src: "https://entropyhill.com/media/img/band/stairs.jpeg", width: 3888, height: 5856, title: "Photo by Timon Weder" },
        { src: "https://entropyhill.com/media/img/band/bandx_1.jpg", width: 2738, height: 1825, title: "Photo by Raphael Müller" },
        { src: "https://entropyhill.com/media/img/band/bandx_2.jpg", width: 2738, height: 1825, title: "Photo by Raphael Müller" },
        { src: "https://entropyhill.com/media/img/band/bandx_3.jpg", width: 2738, height: 1825, title: "Photo by Raphael Müller" },
        { src: "https://entropyhill.com/media/img/band/bandx_4.jpg", width: 1825, height: 2738, title: "Photo by Raphael Müller" },
        { src: "https://entropyhill.com/media/img/band/bandx_5.jpg", width: 2738, height: 1825, title: "Photo by Raphael Müller" },
        { src: "https://entropyhill.com/media/img/band/bandx_6.jpg", width: 2738, height: 1825, title: "Photo by Raphael Müller" },

    ].sort(() => .5 - Math.random());
    const memberImages = [
        { src: "https://entropyhill.com/media/img/band/single/bruno.png", width: 550, height: 550, memberName: "Bruno Bender", title: "Photo by Raphael Müller" },
        { src: "https://entropyhill.com/media/img/band/single/lisa.png", width: 550, height: 550, memberName: "Lisa Schifferle", title: "Photo by Raphael Müller" },
        { src: "https://entropyhill.com/media/img/band/single/nando.png", width: 550, height: 550, memberName: "Nando Erni", title: "Photo by Raphael Müller" },
        { src: "https://entropyhill.com/media/img/band/single/tiziano.png", width: 550, height: 550, memberName: "Tiziano Sommacal", title: "Photo by Timon Weder" },
    ];
    return (
        <Container>
            <Title>Entropy Hill</Title>
            <SubTitle>Electronic Press Kit</SubTitle>
            <br /><hr /><br /><br />
            <FlexContainer>
                <Image src={"https://entropyhill.com/media/img/band/wall_landscape.jpeg"} title="Photo by Timon Weder" loading="lazy" />
                <Stats>
                    <Stat>Entropy Hill</Stat>
                    <Stat>Founded in 2021</Stat>
                    <Stat>Entropic Wave Music / Alternative Rock</Stat>
                    <Stat><StatLink href="https://mx3.ch/entropyhill" target="_blank">MX3</StatLink></Stat>
                    <Stat>
                        <StatLink href="https://www.instagram.com/entropy_hill/" target="_blank">Instagram</StatLink>,
                        <StatLink href="https://www.facebook.com/entropyhillband/" target="_blank"> Facebook</StatLink>,
                        <StatLink href="https://www.bandsintown.com/de/a/15505028-entropy-hill" target="_blank"> Bandsintown</StatLink>
                    </Stat>
                    <Stat>
                        <StatLink href="https://open.spotify.com/artist/4APfaKKTUYeoETKFP4HCTy" target="_blank">Spotify</StatLink>,
                        <StatLink href="https://music.apple.com/us/artist/entropy-hill/1713019741" target="_blank"> Apple Music</StatLink>
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
                            extras: (_, { index }) => (
                                <Member>{memberImages[index].memberName}</Member>
                            ),
                        }}
                    />
                </Members>
                <Biography>
                    <SubSubTitle>Biography</SubSubTitle>
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Maecenas etiam velit quam efficitur fames.
                    Varius curae suscipit consequat risus porttitor nulla aliquam.
                    Blandit vel in ipsum bibendum natoque malesuada venenatis.
                    Cursus lectus proin mollis mauris euismod leo.
                    Fames placerat ultricies porta purus himenaeos odio velit.
                    Tortor penatibus sagittis habitasse odio tincidunt ultricies?
                    Auctor vel nisi non non lorem ac elit laoreet tellus.
                    <br />
                    <br />
                    Ultricies senectus morbi cubilia magnis massa sollicitudin ultricies.
                    Penatibus eleifend fringilla praesent cursus curabitur posuere lacinia lobortis posuere.
                    Ad massa fermentum ante ullamcorper a nisi amet hendrerit eros?
                    Natoque lacus commodo senectus volutpat fames urna neque.
                    Tristique non dui fusce torquent turpis massa.
                    Eu phasellus sociosqu hac mattis praesent.
                    Ridiculus litora sit commodo commodo efficitur imperdiet elementum.
                    <br />
                    <br />
                    Sociosqu laoreet risus massa euismod nostra.
                    Bibendum elit facilisi metus faucibus volutpat placerat.
                    Praesent sed aliquet donec finibus enim parturient?
                    Tempor dapibus magna, vehicula posuere montes tempor.
                    Consectetur hac commodo magna; justo parturient quis amet magna.
                    Porta luctus faucibus cubilia placerat rutrum gravida.
                    Fringilla tincidunt nec duis habitasse dictum, nisi suscipit sapien?
                    Congue fames nisi porttitor, nunc condimentum felis himenaeos adipiscing.
                    <br />
                    <br />
                    Fringilla molestie auctor mattis nostra euismod efficitur ipsum.
                    Nullam lobortis a praesent integer suspendisse gravida cubilia sollicitudin.
                    Dapibus pellentesque maecenas ad pretium vulputate fames.
                    Nec condimentum ridiculus; molestie senectus eros vehicula sem conubia.
                    Porttitor nec posuere in quam velit senectus et felis.
                    Augue condimentum quam nostra elit ullamcorper pulvinar?
                    Facilisis fringilla nisi ipsum eu consequat.
                    Sapien sapien posuere ac at massa duis.
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
                <hr />
                {MUSIC_ENTRIES.map((entry, i) => (
                    <>
                        <Song key={i}>
                            <SongTitle>{entry.title}</SongTitle>

                            {
                                entry.coverImage && entry.musicFile ?
                                    (<>
                                        <audio controls><SongAudio src={entry.musicFile} /></audio>
                                        <SongResourceLink href={entry.musicFile} download={entry.title + ".mp3"} target="_blank">MP3 File</SongResourceLink>
                                        <SongResourceLink href={entry.coverImage} target="_blank">Cover Art</SongResourceLink>
                                    </>) :
                                    (<>

                                        <ReleaseDate>Release: {entry.releaseDate.toLocaleDateString("de-CH", dateOptions)}</ReleaseDate>
                                    </>
                                    )

                            }
                        </Song>
                        <hr />
                    </>
                ))}
            </Diskography>


        </Container>
    )
}

export default ElectronicPressKit