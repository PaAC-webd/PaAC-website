import { useEffect, useState } from "react";
import "./Gallery.css";
import { SlideshowLightbox, initLightboxJS } from "lightbox.js-react";
import Masonry from "react-responsive-masonry";
import { data } from "./Images.js";
import { astro_data } from "./Astro.js";

const RightSidebarComponent = ({ slideIndex }) => {
  if (window.innerWidth > 768) {
    return (
      <div className="right-sidebar"
        style={{
          "width": "40%",
          "height": "100%",
          "overflowY": "scroll",
          "scrollbarWidth": "none",
          "color": "#c1c1c1",
          "display": "flex",
          "flexDirection": "column",
          "backgroundColor": "#151515",
          "padding": "15vh 1em 1em 1em",
        }}>
        <p style={{
          "fontSize": "2em",
          "fontWeight": "bold",
          "marginBottom": "0.5em",
          "textAlign": "left",
          "fontFamily": "Figtree",
        }}
        >{astro_data[slideIndex].captionTitle}</p>
        <p style={{
          "fontStyle": "italic",
          "maxWidth": "90%",
          "textAlign": "left",
          "color": "gray",
          "marginBottom": "1em",
          "fontFamily": "Figtree",
          "fontSize": "0.8em",
          "fontWeight": "500",
          "letterSpacing": ".7px",
          "wordSpacing": ".8px",
        }}>{astro_data[slideIndex].captionQuote}</p>
        <p style={{
          "fontSize": "1em",
          "marginBottom": "1em",
          "maxWidth": "95%",
          "textAlign": "left",
          "fontFamily": "Figtree",
          "fontWeight": "400",
          "letterSpacing": ".7px",
          "wordSpacing": ".8px",
        }}>{astro_data[slideIndex].captionDescription}</p>
        {astro_data[slideIndex].imageDetails && astro_data[slideIndex].imageDetails.map((section, idx) => (
          <div key={idx}>
            <h3 style={{
              "textAlign": "left",
              "paddingBottom": 0,
              "margin": "0.5em 0",
              "fontFamily": "Figtree",
              "fontSize": "1.25em",
              // "fontWeight": "400",
              "letterSpacing": ".7px",
            }}>{section.heading}</h3>
            <ul style={{
              "listStyleType": "none",
              "padding": 0,
              "margin": 0,
              "textAlign": "left",
              // "maxWidth": "80%",
              "fontFamily": "Figtree",
              "fontWeight": "400",
              "letterSpacing": ".7px",
              "wordSpacing": ".8px",
            }}>
              {section.content && section.content.map((line, lineIdx) => (
                <li key={lineIdx} style={{
                  "fontFamily": "Figtree",
                  // marginBottom: "2px",
                }}>{line}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  } else {
    return <></>;
  }
};

export default function Gallery() {
  // Separate states for each lightbox
  const [astroLightbox, setAstroLightbox] = useState({
    isOpen: false,
    slideIndex: 0,
  });

  const [eventLightbox, setEventLightbox] = useState({
    isOpen: false,
    slideIndex: 0,
  });

  const [windowWidth, setWindowWitdth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWitdth(window.innerWidth);
  };

  const [slideIndex, setSlideIndex] = useState(0);

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

  // useEffect(() => {
  //   if (isOpen) {
  //     setTimeout(() => {
  //       document.getElementById("closeBtn").addEventListener("click", () => {
  //         setIsOpen(false);
  //       });
  //     }, 1000);
  //   }
  // }, [isOpen]);

  return (
    <>
      <SlideshowLightbox
        showThumbnails={true}
        images={astro_data}
        lightboxIdentifier="lbox1"
        lightboxImgClass="image-wrapper"
        open={astroLightbox.isOpen}
        startingSlideIndex={astroLightbox.slideIndex}
        onClose={() => setAstroLightbox({ ...astroLightbox, isOpen: false })}
        rightSidebarComponent={<RightSidebarComponent slideIndex={slideIndex} />}
        onSelect={(index) => {
          setSlideIndex(index);
        }}
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
        captionStyle={{
          color: "#c1c1c1",
          "letter-spacing": ".3px",
          // "font-weight": "bold",
          wordSpacing: ".5px",
        }}
        iconColor="#c1c1c1"
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
