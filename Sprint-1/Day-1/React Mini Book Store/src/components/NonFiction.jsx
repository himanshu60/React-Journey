import data from "../nonfiction.json";
export default function NonFiction() {
  return (
    <div data-testid="books-nonfiction">
      <h1 data-testid="books-container-title">Non-Fiction Books</h1>

      <div
        className="books-container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "40px",

          padding: "13px",
        }}
      >
        {data.map((ele, ind) => {
          return (
            <div
              style={{
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                padding: "12px",
                margin: "8px",
              }}
              key={ind}
            >
              <img src={ele.img} alt="" />
              <h2>{ele.title}</h2>
              <p>{ele.year}</p>
              <p>{ele.author}</p>
              <p>{ele.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
