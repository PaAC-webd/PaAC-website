
const Newsletter = () => {
  return (
    <div className="newsletter">
      <div className="newsletter-left">
        <p>Third Edition of our </p>
        <p>Biannual Newsletter is out!</p>
        <h1>THE ASTRO INSIDER</h1>
        <button className="read-here" ><a href="https://drive.google.com/drive/u/1/folders/1UicjNhForzOJwtQddVi608xFUA2TcV4Y" target="_blank" rel="noreferrer">Read here &gt;</a></button>
      </div>
      <div className="newsletter-right">
        <div className="newsletter-img-border">
          <div className="newsletter-img">
          </div>
        </div>
        <div className="newsletter-ellipse"></div>
      </div>
    </div>
  );
};

export default Newsletter;
