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
                    <Stat>No Excuses Entropic Wave Rock / Alternative Rock</Stat>
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
                    <Stat>Appeared on <StatLink href="https://www.lora.ch/radio/ausgaben/ch-block-dj-leo-2023-12-22" target="_blank">Radio LoRa</StatLink> and <StatLink href='https://stadtfilter.ch/' target='_blank'>Stadtfilter</StatLink></Stat>
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
                    <SubSubTitle>Presse Text</SubSubTitle>
                    Mit ihrer Frontsängerin Lisa steht die vierköpfige Band Entropy Hill für ehrliche,
                    energetische Musik, die ihre Wurzeln in der Rockmusik der 70 und 80er Jahre und im Garage Rock hat.
                    Mit einem unverwechselbaren Sound, geprägt von elektrischer Gitarre und dynamischen Arrangements,
                    schaffen sie eine mitreißende Atmosphäre, die live wie auch auf Aufnahmen überzeugt.
                    <br />
                    <br />
                    Auf Plattformen wie Spotify, Apple Music und Co. haben sie mit ihren Songs „Vibe“,
                    „Seele“ und „Poison“ auf sich aufmerksam gemacht.
                    Derzeit steckt die Band mitten in den Vorbereitungen für neue Releases.
                    Am 6.12. erscheint der Song 'Straass', ein Stück über die Kurzlebigkeit des Gefühls der Zufriedenheit.
                    <br />
                    <br />
                    Bis im Februar sind Releases geplant und danach geht es weiter:
                    Die Band arbeitet intensiv an neuen Songs und nutzt die Zeit,
                    um ihren Stil weiterzuentwickeln. „Das Aufnehmen hilft uns, unsere Musik auf das nächste Level zu bringen“,
                    sagt Nando, der Gitarrist von Entropy Hill.
                    <br />
                    <br />
                    Nach erfolgreichen Auftritten in lokalen Bars und auf kleineren Festivals –
                    sowie einem Beitrag auf Radio Lora – strebt die Band nun nach größeren Bühnen und Festivals.
                    Im Februar stehen die nächsten Konzerte an: Entropy Hill spielt im KultA APA in Olten und im Lok.al in Winterthur.
                    <br />
                    <br />
                    Mit ihrer Leidenschaft für Musik haben sich die Vier fest vorgenommen,
                    ein größeres Publikum zu erreichen und dabei weiterhin Musik zu machen,
                    in der sie sich ausleben können.
                    <br />
                    <br />
                    Weitere Informationen und Musik finden Sie auf der <StatLink href="https://entropyhill.com">Website</StatLink>.
                    <br />
                    <br />
                    Kontakt für Anfragen: <br />
                    Nando Erni <br />
                    <StatLink href="mailto:booking@entropyhill.com">booking@entropyhill.com</StatLink>
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