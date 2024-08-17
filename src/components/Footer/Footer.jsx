import "./Footer.css";
import {
  InstagramLogoIcon,
  TwitterLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-main">
        <div className="footer-div-left">
          <div className="footer-div address">
            <h1 className="footer-headings">Address</h1>
            <h2 className="footer-body">
              Student Activity Center (SAC), Room No. 116, Indian Institute of
              Technology Roorkee, Roorkee, Uttarakhand 247667
            </h2>
          </div>
          <div className="footer-div contact">
            <h1 className="footer-headings">Contact</h1>
            <h2 className="footer-body">Sumedh : +91 9850672970</h2>
            <h2 className="footer-body">Prajwal : +91 9949216026</h2>
            <h2 className="footer-body">Khushi : +91 8168405906</h2>
          </div>
        </div>
        <div className="footer-div-right">
          <div className="footer-div email">
            <h1 className="footer-headings">Email</h1>
            <h2 className="footer-body paac-email">
              <a href="mailto:paac@iitr.ac.in">paac@iitr.ac.in</a>
            </h2>
          </div>
          <div className="footer-div social">
            <div className="footer-socials">
              <a
                href="https://www.instagram.com/astro_iitr/?hl=en"
                target="m_blank"
              >
                <InstagramLogoIcon />
                Instagram
              </a>
            </div>
            <div className="footer-socials">
              <a href="https://twitter.com/paaciitr?lang=en" target="m_blank">
                <TwitterLogoIcon />
                Twitter
              </a>
            </div>
            <div className="footer-socials">
              <a
                href="https://www.linkedin.com/company/paac-iitr/"
                target="m_blank"
              >
                <LinkedInLogoIcon />
                Linkedin
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
