
// import react from "react";
export default function BookCard({ele}) {
  return (
    <div data-testid="book-card">
      <img src={ele.img} alt={""} />
      <b>
        <div data-testid="book-card-title">
          {ele.title}
          <span>({ele.year})</span>
        </div>
      </b>
      <div data-testid="book-card-author">{ele.author}</div>
      <div data-testid="book-card-price">{ele.price}</div>
    </div>
  );
}
