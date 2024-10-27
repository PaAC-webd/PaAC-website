import { useEffect, useState } from "react";
import "./Gallery.css";
import { data } from "./Images.js";
import "lightbox.js-react/dist/index.css";
import { SlideshowLightbox, initLightboxJS } from "lightbox.js-react";
import Masonry from "react-responsive-masonry";

export default function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWitdth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWitdth(window.innerWidth);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    window.addEventListener("resize", handleResize);
    initLightboxJS(import.meta.env.VITE_LIGHTBOX_LICENSE_KEY, "Individual");

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        document.getElementById("closeBtn").addEventListener("click", () => {
          setIsOpen(false);
        });
      }, 1000);
    }
  }, [isOpen]);

  return (
    <>
      {/* <div className="gallery_container">
        <SlideshowLightbox
          backgroundColor="#050528"
          className="lightBox"
          theme="night"
          open={isOpen}
          fullScreen={true}
          showThumbnails={true}
          imgAnimation="imgMotion"
          modalClose="clickOutside"
        >
          {data.map((image, index) => {
            return (
              <img
                className="gallery_image"
                key={index}
                src={image.image}
                alt="gallery"
              />
            );
          })}
        </SlideshowLightbox>
      </div>

      <div className="masonry" onClick={() => {setIsOpen(!isOpen);}}>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 500: 3 }}>
          <Masonry gutter="10px">
            {data.map((image, index) => {
              return (
                <img
                title="Click for slideshow"
                  key={index}
                  src={image.image}
                  alt={image.caption}
                  style={{ width: "100%", display: "block" }}
                />
              );
            })}
          </Masonry>
        </ResponsiveMasonry>
      </div> */}

      <SlideshowLightbox showThumbnails={true} images={data} lightboxIdentifier="lbox1">
        <Masonry columnsCount={windowWidth > 600 ? 3 : 2} gutter="10px">
          {data.map((image, i) => (
            <div key={i}>
            <img
              title="Click for slideshow"
              key={i}
              src={image.image}
              data-lightboxjs="lbox1"
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
