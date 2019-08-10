import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Image from "./components/Image";
import Description from "./components/Description";

function App() {

  const [img, setImg] = useState({});


  useEffect(() => {
    const fetchData = async () => {
      console.log("useEffect is firing!");
      //setImg({});
      await axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=aW8AhwEReGzLfle7n2whLeUzRvNegIcyXJ7Yhtay`)
        .then(res => {
          console.log("res: ", res);
          setImg(res.data);
        })
        .catch(err => { console.log("Error: ", err) });
    }
    fetchData();
  },
    [])

  return (
    <div className="App">
      <h1>NASA Astronomy Photo Of The Day</h1>
      <Image data={img} />
      <Description data={img} />
    </div>

  );
}

export default App;
