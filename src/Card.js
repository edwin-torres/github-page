import React from "react";
import "./App.css";

function Card({ pokemon }) {
  return (
    <div className="Pokemon__Card">
      <div className=" Pokemon__name">{pokemon.name}</div>

      <div className="Pokemon__img">
        <img src={pokemon.sprites.front_default} alt="" />
      </div>

      <div className="Pokemon__types">
        {pokemon.types.map((ele, index) => {
          return (
            <div className="Pokemon__type" key={index}>
              {ele.type.name}
            </div>
          );
        })}
      </div>

      <div className="Pokemon__info">
        <div className="Pokemon__data  ">
          <div className="Pokemon__detail">
            <p className="title">Weight: </p>
            <p className="stat">{pokemon.weight}</p>
          </div>

          <div className="Pokemon__detail">
            <p className="title">Height: </p>
            <p className="stat">{pokemon.height}</p>
          </div>
        </div>

        <div className="Pokemon__data">
          <div className="Pokemon__detail ">
            <p className="title">Abilities: </p>
            {pokemon.abilities.map((ele, index) => {
              return (
                <p className="stat" key={index}>
                  {ele.ability.name}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
