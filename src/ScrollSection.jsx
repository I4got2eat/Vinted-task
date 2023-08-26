import React, { useState } from "react";

import API_KEY from "./key";
import ImageSlot from "./ImageSlot";

const ScrollSection = () => {

    const [endPoint, setEndPoint] = useState("https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=a5955fb71be57eb9860df8939bec86e7&per_page=10&page=3&format=json&nojsoncallback=1");
    const [data, setData] = useState([]);
    const [enable, setEnable] = useState(false);
 
    const fetchImages = async () =>{
       const response = await fetch(endPoint).then((res)=> {return res.json()});
        setData(response);
    }

   

    return(
        <>
            <button
            onClick={()=>{fetchImages()}}
            >
                test
            </button>

            <button
            onClick={()=>{setEnable(true)}}>
                check
            </button>

            {
                enable &&
                (<>
                {data.photos.photo.map((photo) =>
                <ImageSlot image={photo} key={photo.id} />
                )}
                </>)
            }
        
        </>
    )
}


export default ScrollSection;