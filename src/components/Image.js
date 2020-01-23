import React from "react";




const Image = (props) => {
    //const [image, setImage] = useState();
    return (
        <div>
            <h2>{props.data.title}</h2>
            {console.log("Image props: ", props)}
            <img src={props.data.hdurl} alt={props.data.explanation} />
        </div>
    )
}

export default Image;