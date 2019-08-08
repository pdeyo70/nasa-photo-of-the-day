import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Image from "../src/components/Image";
import Description from "../src/components/Description";






function App() {

  const [img, setImg] = useState({});
  
  
  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod`)
      .then(res =>  {
        const image = res.data;
        setImg(image);
      })
  })

  console.log(img)


  return (
    <div className="App">
      <h1>NASA Astronomy Photo Of The Day</h1>
      <Image title={img.title} image={img.url} desc={img.explanation} />
      {console.log("img props in App.js: ", img)}
      <Description desc={img.explanation} />
      
    </div>
  );
}

export default App;
