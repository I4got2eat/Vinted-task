import React, { useState } from "react";
import { useEffect } from "react";
import favoritePhotos from "./FavoritePhotos";

const ImageSlot = (image, key) => {
  const [favored, setFavored] = useState(false);
  const [picturePath, setPicturePath] = useState();

function handleFavorite(newFavorite) {
  if(!favoritePhotos.includes(newFavorite))
  {
    favoritePhotos.push(newFavorite)
    console.log(favoritePhotos)   
  }else{
    var position = favoritePhotos.indexOf(newFavorite)
    var firstHalf = favoritePhotos.slice(0, position);
    var secondHalf = favoritePhotos.slice(position, favoritePhotos.length+1)
    var Combined = firstHalf.concat(secondHalf);
    favoritePhotos.push([])
    
    console.log(favoritePhotos)
  }
}

const checkIfFavorite = (id) =>{
  if (favoritePhotos.includes(id)){

    setFavored(true);
  }else{
  }
}

useEffect(() => {
    setPicturePath(
      `https://farm${image.image.farm}.staticflickr.com/${image.image.server}/${image.image.id}_${image.image.secret}_b.jpg`
    );
  }, []);

  return (
    <div
    onMouseEnter={()=>checkIfFavorite(image.image.id)}
    className='img-slot'
    style={{backgroundImage: `url(${picturePath})` }}
    >
      <button onClick={()=>handleFavorite(image.image.id)}  className='fav-btn' >{favored ? (<>Unfavorite</>) : (<>Favorite</>)  }</button>
    </div>
    
    
  );
};

export default ImageSlot;
