import React, { useState } from "react";
import { useEffect } from "react";
const ImageSlot = (image, key) => {
  const [picturePath, setPicturePath] = useState();

  useEffect(() => {
    setPicturePath(
      `https://farm${image.image.farm}.staticflickr.com/${image.image.server}/${image.image.id}_${image.image.secret}_b.jpg`
    );
  }, []);

  return (
    <div
    className='container'
    style={{backgroundImage: `url(${picturePath})` }}
    >
      <button className='fav-btn'>Favorite</button>
    </div>
    
    
  );
};

export default ImageSlot;
