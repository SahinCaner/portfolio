import React from "react";

const HoverSlider = ({ images, activeImageId = 0 }) => {
  return (
    <ul className="hover__slider">
      {images.map(image => {
        return (
          <li
            className={activeImageId === image.id ? "is-visible" : ""}
            key={image.id}
          >
            <img
              src="/images/blank.png"
              alt={image.tag}
              style={{
                background: `url(${image.imageURL}) no-repeat top left`,
                backgroundSize: "cover"
              }}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default HoverSlider;
