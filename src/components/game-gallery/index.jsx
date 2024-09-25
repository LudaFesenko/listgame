import React from "react";

export default function GameGallery({ images = [] }) {
  let gallery = images.map((image, index) => (
    <img src={image} alt="" key={index} />
  ));

  return <div className="game-gallery">{gallery}</div>;
}
