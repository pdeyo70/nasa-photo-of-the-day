import React, { useState } from "react";




const Image = (props) => {
    const [title, setTitle] = useState();
    const [image, setImage] = useState();
    return (
        <div>
            <h2>{setTitle(title)}</h2>
            {console.log("Image props: ", props)}
            <img src={setImage(image.url)} alt={image.explanation} />
        </div>
    )
}

export default Image;