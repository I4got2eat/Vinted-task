import React from "react";

const ImageSlot = (image, key) =>{

    console.log(image)


    return(
        
        <div
        style={{
            background: "red",
            width: "100px",
            height: "100px"
        }}
        >
            <p style={{color: 
            "white"}}>{image.id}</p>
      </div>
        

    )
}

export default ImageSlot