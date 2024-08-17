import { useEffect} from "react";
import "./Contact.css";
import Footer from "../Footer/Footer";

export default function Contact() {

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
    <div className="contact-container">
      {/* <div className="contact-topbar">
        <Topbar />
      </div> */}
      <div className="contact-us-container">
        <div className="contact-desc">
          <div className="contact-us">
            <h2 className="contact-desc-desc">
              Interested in joining us but do not know where to start? Do you
              have a mind-blowing idea that you need help with? Reach out to us,
              We are happy to help!
            </h2>
          </div>
          <div className="visit-us">
            <h1 className="visit-title">Visit us</h1>
            <div className="location">
              <h3>Say hello at the PaAC office in Students Activity Center</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13839.688495359684!2d77.8997458085611!3d29.86651966481195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eb32bac1adc93%3A0x80bba7dd5e4d1a6a!2sStudents%20Activity%20Centre%20-%20SAC!5e0!3m2!1sen!2sin!4v1692962984241!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SAC address"
              ></iframe>
            </div>
          </div>
          <div className="social-media"></div>
        </div>
        {/* <form
          ref={form}
          method="POST"
          className="contact-form"
          data-netlify="true"
          data-netlify-recaptcha="true"
        >
          <input type="hidden" name="form-name" value="contact" />
          <label>Name </label>
          <input required name="name" type="text" />
          <label>Email</label>
          <input required name="email" type="email" />
          <label>Subject</label>
          <input required name="subject" type="subject" />
          <label>Message</label>
          <textarea required rows={5} name="message" />
          <div data-netlify-recaptcha="true"></div>
          <div className="form-submit">
            <button className="form-submit-btn" type="submit">
              Send
            </button>
          </div>
        </form> */}
      <div className="contact-form">
        <iframe data-tally-src="https://tally.so/embed/n91GOK?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" loading="lazy" width="100%" height="507" frameBorder="0" marginHeight="0" marginWidth="0" title="Query form"></iframe>
      </div>
      </div>
      <div className="contact-footer">
        <Footer />
      </div>
    </div>
  );
}
