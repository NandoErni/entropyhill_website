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

function App() {

    const [selected, setSelected] = useState(0)

    return (
        <FullScreenContainer>
            <AwesomeSlider onTransitionStart={(page) => setSelected(page.nextIndex)}
                           bullets={false} selected={selected} fillParent={true}
                           animation="openAnimation">
                <div><HomePage/></div>
                <div><ShowsPage/></div>
                <div><MusicPage/></div>
                <div><ContactPage/></div>
            </AwesomeSlider>
            <Dots numberOfPages={4} currentPage={selected} onClickHandler={(page) => setSelected(page)}/>
        </FullScreenContainer>

    );
}

export default App;