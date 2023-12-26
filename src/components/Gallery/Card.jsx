import "./Gallery.css";

const BookCard = ({ name, author, image, edition, available }) => {
  return (
    <div className={`book-card ${available ? '' : 'not-available'}`}>
      <span className="book-edition">{edition} Edition</span>
      <img src={image} alt="" className="book-image"/>
      <h3 className="book-name">{name}</h3>
      <p className="book-author">{author}</p>
      <div className="line"></div>
      <div className={`${ available ? 'hide' : 'hide-availability'}`} >Not Available</div>
    </div>
  );
};

export default BookCard;
