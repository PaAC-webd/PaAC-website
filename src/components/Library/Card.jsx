const BookCard = ({
  bookName,
  authorName,
  bookImage,
  bookEdition,
  bookAvailable,
}) => {
  return (
    <div className={`book-card ${bookAvailable ? "" : "not-available"}`}>
      <span className="book-edition">{bookEdition} Edition</span>
      <img src={bookImage.url} alt="" className="book-image" height={256}/>
      <h3 className="book-name">{bookName}</h3>
      <div className="author">
        <p className="book-author">{authorName}</p>
        <div className="line"></div>
      </div>
      <div className={`${bookAvailable ? "hide" : "hide-availability"}`}>
        Not Available
      </div>
    </div>
  );
};

export default BookCard;
