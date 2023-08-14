import {ColoredBackgroundContainer, Container, Title} from "../../components/PageElements";
import {SocialMediaContainer} from "../Home/Components";
import SocialMediaPanel from "../../components/SocialMediaPanel";

function ContactPage() {

    return(
        <Container>
            <ColoredBackgroundContainer>
                <Title>Contact us</Title>
                <div style={{alignItems: 'center', textAlign: 'center'}}>
                    <div style={{fontWeight: 'bold'}}>Band Management, Booking, etc.</div>
                    <br/>
                    Nando Erni
                    <br/>
                    nando.erni@outlook.de
                </div>

                <SocialMediaPanel isBig={true}/>
            </ColoredBackgroundContainer>
        </Container>
    )
}

export default ContactPage