import React, { useEffect, useState } from "react";
import Card from "../Card";

import "../App.css";

function Pokemon() {
  const [loading, setLoading] = useState(true);

  const [randomPokemon, setRandomPokemon] = useState("");
  const [randomNumber, setRandomNumber] = useState(() => {
    return Math.floor(Math.random() * 700 + 1);
  });

  useEffect(() => {
    console.log("Pokemon Mounted");
 
    async function getPokemon() {

      let newPokemon = await fetchPokemon(
        `https://pokeapi.co/api/v2/pokemon/${randomNumber}`
      );   // 'https://pokeapi.co/api/v2/pokemon';

      setRandomPokemon(() => {
        return newPokemon;
      });

      setLoading(false);
    }

    getPokemon();

    return () => {
      console.log("Pokemon UNMONUNTED");
    };
  }, [randomNumber]);

  async function fetchPokemon(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((res) => res.json())
        .then((jsonData) => resolve(jsonData));
    });
  }

  return (
    <div>
      {loading ? (
        <h1>Loading....</h1>
      ) : (
        <div>
          <div className="btn">
            <button
              onClick={() => {
                let newNumber = Math.floor(Math.random() * 700 + 1);
                setRandomNumber(newNumber);
              }}
            >
              {" "}
              Catch another!{" "}
            </button>
          </div>
          <div className="grid-container">
            {<Card pokemon={randomPokemon} />}
          </div>
        </div>
      )}
    </div>
  );
}

export default Pokemon;
