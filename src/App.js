import "./styles.css";
import books from "./images/hero.png";
import { useState } from "react";

var booksDB = {
  "Biographical Fiction": [
    { name: "Tuesdays with Morrie", ratings: "8/10" },
    { name: "The Tattooist of Auschwitz", ratings: "9/10" }
  ],
  "Domestic Fiction": [{ name: "Thousand Splendid Suns", ratings: "8.5/10" }],
  Drama: [
    { name: "A Kite Runner", ratings: "8.5/10" },
    { name: "Alchemist", ratings: "9/10" }
  ],
  "Self-help": [
    { name: "Love for imperfect things", ratings: "8.5/10" },
    { name: "The Power of your subconscious mind", ratings: "8/10" }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Biographical Fiction");

  function genreHandler(bookGenre) {
    setGenre(bookGenre);
  }
  return (
    <div className="App">
      <h1 style={{ fontFamily: "Raleway, sans-serif" }}>
        <img alt="" className="heroImg" src={books} />
        knowbooks
      </h1>
      <p>Check out the ratings of books on different genre.</p>

      <div>
        {Object.keys(booksDB).map(function (genre) {
          return (
            <button
              onClick={() => genreHandler(genre)}
              style={{
                backgroundColor: "#E5E7EB",
                fontFamily: "Raleway, sans-serif",
                border: "0.5px solid black",
                fontSize: "small"
              }}
            >
              {genre}
            </button>
          );
        })}
      </div>

      <hr />

      <div>
        <ul style={{ paddingInlineStart: "0px" }}>
          {booksDB[selectedGenre].map(function (genre) {
            return (
              <li
                style={{
                  listStyle: "none",
                  marginRight: "20%",
                  marginTop: "1rem",
                  fontFamily: "Raleway, sans-serif",
                  paddingLeft: "2rem",
                  padding: "0.75rem",
                  border: "1px solid #6B7280",
                  borderRadius: "1rem"
                }}
                key={genre.name}
              >
                {""}
                <div style={{ fontSize: "larger" }}>{genre.name}</div>
                <div style={{ fontSize: "small" }}>{genre.ratings}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
