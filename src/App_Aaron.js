import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "./components/Image";
import Description from "./components/Description";

function App() {
    const [picState, setPicState] = useState();
    const [copyrightState, setCopyRightState] = useState();
    const [photoDateState, setPhotoDateState] = useState();
    const [titleState, setTitleState] = useState();
    const [expState, setExpState] = useState();
    const [hdState, setHDState] = useState();
    const hdVisState = useState(false);

    useEffect(() => {
        axios
            .get(
                "https://api.nasa.gov/planetary/apod?api_key=ndSqWHxm1joz14pwLd9KM7dki3Qd5GoFPBCV0KuP"
            )
            .then(res => {
                setPicState(res.data.url);
                setCopyRightState(
                    res.data.copyright ? res.data.copyright : "NASA/CXC/SAO"
                );
                setPhotoDateState(res.data.date);
                setTitleState(res.data.title);
                setExpState(res.data.explanation);
                setHDState(res.data.hdurl);
            })
            .catch(err => console.log(err));
    }, []);
    picState &&
        console.log(
            picState,
            copyrightState,
            photoDateState,
            titleState,
            expState,
            hdState,
            hdVisState
        );

    return (<div className="App">
        <h1>NASA Astronomy Photo Of The Day</h1>
        <Image title={titleState} image={hdState} alt={expState} />
        <Description desc={expState} />}
</div>)
}

export default App;