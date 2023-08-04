import image from '../../img/bandx/bandx_3.jpg'
import {FullScreenImg, CenteredMainTitle} from "./Components";

function HomePage() {
    return (
        <>
            <FullScreenImg src={image}/>
            <CenteredMainTitle>Entropy Hill</CenteredMainTitle>
        </>
    )
}

export default HomePage