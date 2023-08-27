import React, { useState } from "react";

import API_KEY from "./key";
import ImageSlot from "./ImageSlot";

const ScrollSection = () => {
  const [endPoint, setEndPoint] = useState(
    `https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${API_KEY}&per_page=10&page=1&format=json&nojsoncallback=1`
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

  return (
    <>
      <button
        onClick={() => {
          fetchImages();
        }}
      >
        test
      </button>
      <div style={{display: "flex", flexWrap: "wrap"}}>
        {enable && (
          <>
            {data.photos.photo.map((photo) => (
              <ImageSlot image={photo} key={photo.id} />
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default ScrollSection;
