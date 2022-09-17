import React from "react";

import useFetchGifs from "../hooks/useFetchGifs";
import GifItem from "./GifItem";

const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      {/* {isLoading && <h2>Cargando...</h2>} */}
      <h3>{category}</h3>
      <div className="card-grid">
        {images.map((info) => (
          <GifItem key={info.id} {...info} />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
