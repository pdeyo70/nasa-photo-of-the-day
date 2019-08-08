import React, { useState } from "react";



const Description = () => {
    const [desc, setDesc] = useState();

    return(
        <p>{setDesc(desc)}</p>
    )
}

export default Description;