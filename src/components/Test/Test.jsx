import { useEffect} from "react";
import "./Test.css";
import Footer from "../Footer/Footer";

export default function Test() {

  const doc_link = "https://docs.google.com/spreadsheets/d/16MdAuK8po2S_AdEVVgYH_GDpYXZkKdmFsVYheG2aiYI/edit?gid=0#gid=0" ;
  const assign_link = "https://docs.google.com/document/d/1JDXjj1w7s803QXOJLf5WGfAvyMto-o72LQ-z1tP4y-8/edit?usp=sharing" ;
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  })

  useEffect(()=> {
    Tally.loadEmbeds();
  }, [])

  return (
    <div className="project-container">
     
      <div className="project-us-container">
        <div className= "project-desc">

          <h2 className="project-text">
            Hello Everyone!, this year's open projects are out, please fill the response sheet
            and complete the respective assignment.
            <br />
            <a className="doc_link" href={doc_link}>Click here for more info about the projects.</a>
          </h2>

          <h2 className="assignment">
            <br />
            <a className="assign_link" href = {assign_link} > Link for MANDATORY assignments. </a>
          </h2>

        </div> 
        
      <div className="project-form">
        <iframe data-tally-src="https://tally.so/embed/2EjlGp?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" loading="lazy" width="100%" height="507" frameBorder="0" marginHeight="0" marginWidth="0" title="Query form"></iframe>
      </div>
      </div>
      <div className="contact-footer">
        <Footer />
      </div>
    </div>
  );
}



