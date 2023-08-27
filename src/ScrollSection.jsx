import React, { useState } from "react";
import { useEffect } from "react";
import API_KEY from "./key";
import ImageSlot from "./ImageSlot";

const ScrollSection = () => {
  const [page, setPage] = useState("1")
  const [endPoint, setEndPoint] = useState(
    `https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${API_KEY}&per_page=12&page=${page}&format=json&nojsoncallback=1`
  );
  const [data, setData] = useState([]);
  const [enable, setEnable] = useState(false);


  const fetchImages = async () => {
    const response = await fetch(endPoint).then((res) => {
      return res.json();
    });
    setData(response);
    setEnable(true);
  };

  const handleScroll = async () =>{
    
    console.log("called : ")
  }
  
  useEffect(() => {
    fetchImages()
  }, []);

  return (
  <div className='scroll-view' onScrollCapture={()=>
    console.log("called : ")}>
      <div 
      className='row-view'
      >
        {enable && (
          <>
            {data.photos.photo.map((photo) => (
              <ImageSlot image={photo} key={photo.id} />
            ))}
          </>
        )}
      </div>
      </div>
  );
};

export default ScrollSection;
