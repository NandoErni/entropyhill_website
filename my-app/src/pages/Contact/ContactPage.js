import {Container, FullScreenImg, Title} from "../../components/PageElements";
import SocialMediaPanel from "../../components/SocialMediaPanel";
import image from "../../img/bandx/bandx_3.jpg";

function ContactPage() {

    return(
        <>
            <FullScreenImg src={image}/>
            <Container>
                <Title>Contact us</Title>
                <div style={{alignItems: 'center', textAlign: 'center'}}>
                    <div style={{fontWeight: 'bold'}}>Band Management, Booking, etc.</div>
                    <br/>
                    Nando Erni
                    <br/>
                    nando.erni@outlook.de
                </div>

                <SocialMediaPanel isBig={true}/>
            </Container>
        </>
    )
}

export default ContactPage