import React, { useState } from "react";
import ScrollSection from "./ScrollSection";
import FavoriteTabs from "./FavoritesTab";

const Tabs = () => {
  const [selectedHome, setSelectedHome] = useState(true);

  const handleTabClick = (isHome) => {
    setSelectedHome(isHome);
  };

  return (
    <div>
      <div className="tabs-container">
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Vinted_logo.png/1200px-Vinted_logo.png"
          onClick={() => handleTabClick(true)}
          alt="Vinted Logo :)"
        />
        <div className="btns">
          <button
            className={`tab-btn ${selectedHome ? "active" : ""}`}
            onClick={() => handleTabClick(true)}
          >
            Home
          </button>
          <button
            className={`tab-btn ${!selectedHome ? "active" : ""}`}
            onClick={() => handleTabClick(false)}
          >
            Favorites
          </button>
        </div>
        <div className="title">
          <h1>{selectedHome ? "Home" : "Favorites"}</h1>
        </div>
        <div className="credits">
          <h3>Mykolas Sanda</h3>
        </div>
      </div>
      {selectedHome ? <ScrollSection /> : <FavoriteTabs />}
    </div>
  );
};

export default Tabs;
