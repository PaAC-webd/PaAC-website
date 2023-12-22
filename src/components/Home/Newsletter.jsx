
const Newsletter = () => {
  return (
    <div className="newsletter">
      <div className="newsletter-left">
        <p>Third Edition of our </p>
        <p>Biannual Newsletter is out!</p>
        <h1>THE ASTRO INSIDER</h1>
        <button className="read-here">Read here &gt;</button>
      </div>
      <div className="newsletter-right">
        <div className="newsletter-img-border">
          <div className="newsletter-img">
            {/* <img src={newsletterImage} alt="" /> */}
          </div>
        </div>
        <div className="newsletter-ellipse"></div>
      </div>
    </div>
  );
};

export default Newsletter;
