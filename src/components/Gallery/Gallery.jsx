import { useRef, useLayoutEffect } from "react";
import "./Gallery.css";
import { data } from "./Images.js";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";

export default function Gallery() {
  const comp = useRef();
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let sections = gsap.utils.toArray(".panel");
      gsap.to(
        sections,
        {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: ".gallery-body",
            pin: true,
            scrub: 1,
            snap: 1 / (sections.length - 1),
            end: "+=3500",
          },
        },
        []
      );
    }, comp);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  })



  return (
    <div className="gallery-container" ref={comp}>
      {/* <div className="gallery-topbar">
        <Topbar />
      </div> */}
      <div className="gallery-body" style={{ width: `${data.length * 100}%` }}>
        {data.map((image) => {
          return (
            <div
              className="panel"
              key={image.title}
              style={{
                backgroundImage: `url(${image.image})`,
              }}
            >
              <div className="panel-content">
                <h1>{image.caption}</h1>
                <p>{image.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
