import React, { useEffect, useState } from "react";
import ImageSlot from "./ImageSlot";

const FavoriteTabs = () => {
  const [photos, setPhotos] = useState([]);

  const getElementsFromLocalStorage = () => {
    let photoArray = [];
    var favorites = JSON.parse(localStorage.getItem("favorites"));
    if (favorites != null) {
      favorites.forEach((item) => {
        photoArray.push({
          id: item[0],
          server: item[1],
          secret: item[2],
          title: item[3],
        });
      });
      setPhotos(photoArray);
    }
  };
  useEffect(() => {
    getElementsFromLocalStorage();
  }, []);

  return (
    <>
      <div className="fav-tab-scroll-view">
        <div className="fav-tab-row-view">
          {photos.length > 0 ? (
            <>
              {photos.map((photo, index) => (
                <ImageSlot image={photo} key={index} />
              ))}
            </>
          ) : (
            <div className="empty-fav-tab">
              <h1>You have no Favorite photos</h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FavoriteTabs;
