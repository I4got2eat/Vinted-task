import React, { useState } from "react";
import { useEffect } from "react";

const ImageSlot = (image) => {
  const [photo, setPhoto] = useState(image.image);
  const [favored, setFavored] = useState(false);
  const [picturePath, setPicturePath] = useState();
  const [selectedPhoto, setSelectedPhoto] = useState();

  const addElementToLocalStorage = () => {
    if (getElementsFromLocalStorage()) {
      let oldFavoriteList = getElementsFromLocalStorage();
      oldFavoriteList.push(selectedPhoto);
      localStorage.setItem("favorites", JSON.stringify(oldFavoriteList));
    } else {
      localStorage.setItem("favorites", `[${JSON.stringify(selectedPhoto)}]`);
    }
    setFavored(true);
  };

  const getElementsFromLocalStorage = () => {
    if (localStorage.getItem("favorites") == null) {
      return null;
    } else {
      return JSON.parse(localStorage.getItem("favorites"));
    }
  };

  const removeElementFromLocalStorage = (index) => {
    var favorites = getElementsFromLocalStorage();
    if (favorites != null) {
      favorites.splice(index, 1);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      setFavored(false);
    }
  };

  const checkIfFavored = () => {
    var favorites = getElementsFromLocalStorage();
    var anyValueMatch = null;
    if (favorites != null) {
      favorites.forEach((photo, index) => {
        if (JSON.stringify(photo) == JSON.stringify(selectedPhoto)) {
          anyValueMatch = index;
        }
      });
    }

    if (anyValueMatch != null) {
      setFavored(true);
    } else {
      setFavored(false);
    }

    return anyValueMatch;
  };

  const HandleFavoriteAction = () => {
    if (selectedPhoto != null || selectedPhoto != undefined) {
      var favorites = getElementsFromLocalStorage();
      if (favorites != null) {
        var index = checkIfFavored();
        if (index != null) {
          removeElementFromLocalStorage(index);
        } else {
          addElementToLocalStorage();
        }
      } else {
        addElementToLocalStorage();
      }
    }
  };

  useEffect(() => {
    checkIfFavored();
  }, [selectedPhoto]);

  useEffect(() => {
    setPicturePath(
      `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`
    );
  }, []);

  return (
    <>
      <div
        onMouseEnter={() =>
          setSelectedPhoto([photo.id, photo.server, photo.secret, photo.title])
        }
        className="img-slot"
        style={{ backgroundImage: `url(${picturePath})` }}
      >
        <div className="img-overlay">
          <h2 className="img-title">{photo.title}</h2>
          <hr></hr>
          <button onClick={() => HandleFavoriteAction()} className="fav-btn">
            {favored ? <>unfavorite</> : <>favorite</>}
          </button>
        </div>
      </div>
    </>
  );
};

export default ImageSlot;
