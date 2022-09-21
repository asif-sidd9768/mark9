import "./styles.css";
import books from "./images/hero.png";
import { useState } from "react";

var booksDB = {
  "Biographical Fiction": [
    { 
      name: "Tuesdays with Morrie", 
      ratings: "8/10",
      description: "Maybe it was a grandparent, or a teacher or a colleague. Someone older, patient and wise, who understood you when you were young and searching, and gave you sound advice to help you make your way through it. For Mitch Albom, that person was Morrie Schwartz, his college professor from nearly twenty years ago.Maybe, like Mitch, you lost track of this mentor as you made your way, and the insights faded. Wouldn't you like to see that person again, ask the bigger questions that still haunt you? Mitch Albom had that second chance. He rediscovered Morrie in the last months of the older man's life. Knowing he was dying of ALS - or motor neurone disease - MItch visited Morrie in his study every Tuesday, just as they used to back in college. Their rekindled relationship turned into one final 'class': lessons in how to live.TUESDAYS WITH MORRIE is a magical chronicle of their time together, through which Mitch shares Morrie's lasting gift with the world.",
      image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1423763749l/6900.jpg"
    },
    { 
      name: "The Tattooist of Auschwitz", 
      ratings: "9/10",
      description: "In 1942, Lale Sokolov arrived in Auschwitz-Birkenau. He was given the job of tattooing the prisoners marked for survival - scratching numbers into his fellow victims' arms in indelible ink to create what would become one of the most potent symbols of the Holocaust. Waiting in line to be tattooed, terrified and shaking, was a young girl. For Lale - a dandy, a jack-the-lad, a bit of a chancer - it was love at first sight. And he was determined not only to survive himself, but to ensure this woman, Gita, did, too. So begins one of the most life-affirming, courageous, unforgettable and human stories of the Holocaust: the love story of the tattooist of Auschwitz.",
      image: "https://thelastwordbookreview.files.wordpress.com/2018/01/cover3.jpg?w=553&h=841"
    }
  ],
  "Domestic Fiction": [
    { 
      name: "Thousand Splendid Suns", 
      ratings: "8.5/10",
      description: "Mariam is only fifteen when she is sent to Kabul to marry Rasheed. Nearly two decades later, a friendship grows between Mariam and a local teenager, Laila, as strong as the ties between mother and daughter. When the Taliban take over, life becomes a desperate struggle against starvation, brutality and fear. Yet love can move a person to act in unexpected ways, and lead them to overcome the most daunting obstacles with a startling heroism.",
      image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1655336738i/128029._UY1388_SS1388_.jpg"
    }
  ],
  Drama: [
    { 
      name: "A Kite Runner", 
      ratings: "8.5/10",
      description: "Afghanistan, 1975: Twelve-year-old Amir is desperate to win the local kite-fighting tournament and his loyal friend Hassan promises to help him. But neither of the boys can foresee what will happen to Hassan that afternoon, an event that is to shatter their lives. After the Russians invade and the family is forced to flee to America, Amir realises that one day he must return to Afghanistan under Taliban rule to find the one thing that his new world cannot grant him: redemption.",
      image: "https://n3.sdlcdn.com/imgs/j/r/3/THE-KITE-RUNNER-BY-KHALID-SDL427454667-1-61a84.jpg"
    },
    { 
      name: "The Alchemist", 
      ratings: "9/10",
      description: "Paulo Coelho's enchanting novel has inspired a devoted following around the world. This story, dazzling in its powerful simplicity and inspiring wisdom, is about an Andalusian shepherd boy named Santiago who travels from his homeland in Spain to the Egyptian desert in search of a treasure buried in the Pyramids. Along the way he meets a Gypsy woman, a man who calls himself",
      image: "https://5.imimg.com/data5/WA/IN/MY-11183377/the-alchemist-500x500.png"
    }
  ],
  "Self-help": [
    { 
      name: "Love for imperfect things", 
      ratings: "8.5/10",
      description: "The Sunday Times Top 10 BestsellerFrom the author of the phenomenal multi-million copy bestseller The Things You Can See Only When You Slow Down \"Hearing the words 'be good to yourself first, then to others' was like being struck by lightning.\"Many of us respond to the pressures of life by turning inwards and ignoring problems, sometimes resulting in anxiety or depression. Others react by working harder at work, at school or at home, hoping that this will make ourselves and the people we love happier.But what if being yourself is enough? Just as we are advised on airplanes to take our own oxygen first before helping others, we must first be at peace with ourselves before we can be at peace with the world around us.In this beautiful follow-up to his international bestseller The Things You Can See Only When You Slow Down, Buddhist monk Haemin Sunim turns his trademark wisdom and kindness to self-care",
      image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1531215461l/39736045.jpg"
    },
    { 
      name: "The Power of your subconscious mind", 
      ratings: "8/10",
      description: "The Power of Your Subconscious Mind is one of the most promising self improvement books that you can gift to yourself or your loved ones. This book is designed to help you improve your relationships, health, and also to give you an internal strength that makes every hurdle look small. The book brings together best of both the worlds – scientific research as well as spiritual wisdom. It used the combined ideas to explain how our subconscious mind has the power to change our lives. The book explains how by understanding and learning to control our subconscious mind, we can welcome a world of prosperity, happiness and success.",
      image: "https://5.imimg.com/data5/MP/IX/MY-29456260/the-power-of-your-subconscious-mind-500x500.jpg"
    }
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
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <div style={{ fontSize: "larger" }}>{genre.name}</div>
                    <div style={{ fontSize: "small" }}>{genre.ratings}</div>
                    <div 
                      style={{ 
                        fontSize: "small",
                        width: "90%",
                        textAlign: 'justify',
                        textJustify: 'inter-word'
                      }}
                    >
                      <hr />
                      {genre.description}
                    </div>
                  </div>
                  <div>
                    <img 
                      src={genre.image} 
                      style={{
                        margin: '2rem 0.5rem',
                        width: '200px'
                      }}
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
