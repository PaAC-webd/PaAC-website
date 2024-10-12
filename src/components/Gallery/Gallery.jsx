import { useEffect, useState } from "react";
import "./Gallery.css";
import { data } from "./Images.js";
import "lightbox.js-react/dist/index.css";
import { SlideshowLightbox, initLightboxJS } from "lightbox.js-react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function Gallery() {

  // const openModal = () => {
  //   console.log(1)
  //   document.getElementById("slideshowAnim").style.display = "block";
  // }
  // const comp = useRef();
  // gsap.registerPlugin(ScrollTrigger);

  // useLayoutEffect(() => {
  //   let ctx = gsap.context(() => {
  //     let sections = gsap.utils.toArray(".panel");
  //     gsap.to(
  //       sections,
  //       {
  //         xPercent: -100 * (sections.length - 1),
  //         ease: "none",
  //         scrollTrigger: {
  //           trigger: ".gallery-body",
  //           pin: true,
  //           scrub: 1,
  //           snap: 1 / (sections.length - 1),
  //           end: "+=3500",
  //         },
  //       },
  //       []
  //     );
  //   }, comp);

  //   return () => ctx.revert();
  // }, []);
   const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });

  useEffect(() => {
    initLightboxJS(import.meta.env.VITE_LIGHTBOX_LICENSE_KEY, "Individual");
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        document.getElementById("closeBtn").addEventListener("click", () => {
          setIsOpen(false);
        });
      }, 1000)
    }
  }, [isOpen])

  return (
    // <div className="gallery-container" ref={comp}>
    //   {/* <div className="gallery-topbar">
    //     <Topbar />
    //   </div> */}
    //   <div className="gallery-body" style={{ width: `${data.length * 100}%` }}>
    //     {data.map((image) => {
    //       return (
    //         <div
    //           className="panel"
    //           key={image.title}
    //           style={{
    //             backgroundImage: `url(${image.image})`,
    //           }}
    //         >
    //           <div className="panel-content">
    //             <h1>{image.caption}</h1>
    //             <p>{image.description}</p>
    //           </div>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>

    // <div
    //   style={{
    //     display: "flex",
    //     flexDirection: "column",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     height: "100vh",
    //     paddingLeft: "5rem",
    //     paddingRight: "5rem",
    //     textAlign: "center",
    //     backgroundImage: "url(Frame_96.png)",
    //     backgroundRepeat: "no-repeat",
    //     backgroundPosition: "center",
    //     backgroundSize: "cover",
    //     opacity: 0.7,
    //   }}
    // >
    //   <h1 style={{ marginBottom: "1rem", fontSize: "3rem", color: "#eca674" }}>
    //     {" "}
    //     Our cosmic captures are coming soon!
    //   </h1>
    //   <h1 style={{ marginBottom: "1rem", fontSize: "3rem", color: "#eca674" }}>
    //     {" "}
    //     Stay Tuned...
    //   </h1>
    // </div>
    <>
      <div className="gallery_container">
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
      </div>
    </>
  );
}
