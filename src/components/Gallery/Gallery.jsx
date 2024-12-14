import { useEffect, useState } from "react";
import "./Gallery.css";
import { data } from "./Images.js";
import "lightbox.js-react";
import { SlideshowLightbox} from "lightbox.js-react";
import Masonry from "react-responsive-masonry";

export default function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [slideIndex, setSlideIndex] = useState(0);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <SlideshowLightbox showThumbnails={true} images={data} lightboxIdentifier="lbox1" open={isOpen} startingSlideIndex={slideIndex} onClose={() => {setIsOpen(false)}}>
        <Masonry columnsCount={windowWidth > 600 ? 3 : 2} gutter="10px">
          {data.map((image, i) => (
            <div key={i}
            >
            <img
              title="Click for slideshow"
              key={i}
              onClick={() => {console.log("click", i); setSlideIndex(i); setIsOpen(true);}}
              src={image.src}
              // data-lightboxjs="lbox1"
              style={{ width: "100%", display: "block" }}
              />
              <p>{image.caption}</p>
              </div>
          ))}
        </Masonry>
      </SlideshowLightbox>
    </>
  );
}