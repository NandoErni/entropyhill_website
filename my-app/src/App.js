import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './App.css'
import {useState} from "react";
import HomePage from "./pages/Home/HomePage";
import ShowsPage from "./pages/Shows/ShowsPage";
import FullScreenContainer from "./components/FullScreenContainer";
import Dots from "./components/Dots"
import MusicPage from "./pages/Music/MusicPage";
import ContactPage from "./pages/Contact/ContactPage";
import 'react-awesome-slider/dist/custom-animations/scale-out-animation.css';

function App() {

    const [selected, setSelected] = useState(0)

    const pages = [
        (<div key={"Home"}><HomePage/></div>),
        (<div key={"Shows"}><ShowsPage/></div>),
        (<div key={"Music"}><MusicPage/></div>),
        (<div key={"Contact"}><ContactPage/></div>),
    ]
    function handleScroll(event) {
        console.log(event)
    }
    window.addEventListener('scroll', handleScroll);


    return (
        <FullScreenContainer>
            <AwesomeSlider onTransitionStart={(page) => setSelected(page.nextIndex)}
                           bullets={false} selected={selected} fillParent={true}
                           animation="scaleOutAnimation">
                {pages}
            </AwesomeSlider>
            <Dots numberOfPages={pages.length} currentPage={selected} onClickHandler={(page) => setSelected(page)}/>
        </FullScreenContainer>

    );
}

export default App;