import React, { useState, useEffect, useRef } from "react";
import { API_KEY, CATEGORY, PAGE_SIZE } from "./EndPointData";
import ImageSlot from "./ImageSlot";

const ScrollSection = () => {
  const [page, setPage] = useState(3);
  const [photos, setPhotos] = useState([]);
  const [enable, setEnable] = useState(false);
  const scrollViewRef = useRef(null);

  const fetchImages = async () => {
    try {
      const response = await fetch(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&per_page=${PAGE_SIZE}&page=${page}&format=json&nojsoncallback=1&safe_search=1&tags=${CATEGORY}`
      );
      const data = await response.json();

      const customContainer = data.photos.photo.map((element) => ({
        id: element.id,
        server: element.server,
        secret: element.secret,
        title: element.title,
      }));

      setPhotos((prevPhotos) => [...prevPhotos, ...customContainer]);
      setEnable(true);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  const handleScroll = (e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.target;
    const scrollLimit = scrollHeight - clientHeight;

    if (scrollTop >= scrollLimit * 0.8 && scrollTop < scrollLimit * 0.82) {
      fetchImages();
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="scroll-view" onScroll={handleScroll} ref={scrollViewRef}>
      <div className="row-view">
        {enable &&
          photos.map((photo, index) => (
            <ImageSlot image={photo} tab="home" key={index} />
          ))}
      </div>
    </div>
  );
};

export default ScrollSection;
