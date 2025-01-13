const Newsletter = () => {
  return (
    <div className="newsletter">
      <div className="newsletter-left">
        <p>Third Edition of our </p>
        <p>Biannual Newsletter is out!</p>
        <h1>THE ASTRO INSIDER</h1>
        <a
          href="https://drive.google.com/drive/folders/1NdYZEJDhn2tMRz4Lf9DSxbTjbq_uOxnI?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <button className="read-here">Read here &gt;</button>
        </a>
      </div>
      <div className="newsletter-right">
        <div className="newsletter-img-border">
          <div className="newsletter-img"></div>
        </div>
        <div className="newsletter-ellipse"></div>
      </div>
    </div>
  );
};

export default Newsletter;
