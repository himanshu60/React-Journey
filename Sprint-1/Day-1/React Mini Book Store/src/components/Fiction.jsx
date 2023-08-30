import data from "../fiction.json";

export default function Fiction() {
  return (
    <div data-testid="books-fiction">
      <h1 data-testid="books-container-title">Fictional Boooks</h1>

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
              <img
                style={{ width: "100%", height: "400px" }}
                src={ele.img}
                alt=""
              />
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
