import { useEffect, useState } from "react";
import "./Gallery.css";
import { data } from "./Images.js";
import { astro_data } from "./Astro.js";
import "lightbox.js-react";
import { SlideshowLightbox } from "lightbox.js-react";
import Masonry from "react-responsive-masonry";

export default function Gallery() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // Separate states for each lightbox
  const [astroLightbox, setAstroLightbox] = useState({
    isOpen: false,
    slideIndex: 0,
  });

  const [eventLightbox, setEventLightbox] = useState({
    isOpen: false,
    slideIndex: 0,
  });

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
      {/* <div className="gallery-heading">
        <h1>Astrophotography by PaAC</h1>
      </div> */}

      <SlideshowLightbox
        showThumbnails={true}
        images={astro_data}
        lightboxIdentifier="lbox1"
        lightboxImgClass="image-wrapper"
        open={astroLightbox.isOpen}
        startingSlideIndex={astroLightbox.slideIndex}
        onClose={() => setAstroLightbox({ ...astroLightbox, isOpen: false })}
      >
        <Masonry columnsCount={windowWidth > 600 ? 3 : 2} gutter="10px">
          {astro_data.map((image, i) => (
            <div key={i}>
              <img
                title="Click for slideshow"
                key={i}
                onClick={() =>
                  setAstroLightbox({ isOpen: true, slideIndex: i })
                }
                src={image.src}
                style={{ width: "100%", display: "block" }}
              />
            </div>
          ))}
        </Masonry>
      </SlideshowLightbox>

      <div className="gallery-heading">
        <h1>PaAC people & events</h1>
      </div>
      <SlideshowLightbox
        showThumbnails={true}
        images={data}
        lightboxIdentifier="lbox2"
        open={eventLightbox.isOpen}
        startingSlideIndex={eventLightbox.slideIndex}
        onClose={() => setEventLightbox({ ...eventLightbox, isOpen: false })}
      >
        <Masonry columnsCount={windowWidth > 600 ? 3 : 2} gutter="10px">
          {data.map((image, i) => (
            <div key={i}>
              <img
                title="Click for slideshow"
                key={i}
                onClick={() =>
                  setEventLightbox({ isOpen: true, slideIndex: i })
                }
                src={image.src}
                style={{ width: "100%", display: "block" }}
              />
            </div>
          ))}
        </Masonry>
      </SlideshowLightbox>
    </>
  );
}
