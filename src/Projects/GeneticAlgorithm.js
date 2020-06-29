import React, { useState, useRef, useEffect } from "react";

import "../App.css";

let population = []; // Array containing the initial population.
//Each member of the initial population is a randomly generated phrase of the same length as the target phrase.
//The population array will evolve from previous generations based on their fitness.

let matingPoolBucket = []; //Array that allocates value to each member of the current population based on their fitness.
//Members with more fitness will appear more times on this array.

let fitnessArray = []; // Array that assigns a fitness score to each member of the current population.

let phrasesArr = []; //array containing best phrases from each generation

let targetPhrase = ""; //user will be prompted to enter a target phrase

let populationSize = 0; //size of the population array will depend on the size of the target phrase

let index = 0; //identifies the number of generations

function GeneticAlgorithm() {
  let [generationNum, setGenerationNum] = useState(0); //gives the generations
  let [currentBest, setCurrentBest] = useState(""); //best phrase from each generation
  let [finished, setFinished] = useState(""); //finished evolving?
  let [inputBox, setInputBox] = useState(""); //user input text
  let [visibility, setVisibility] = useState("visible"); //button
  let [display, setDisplay] = useState("flex"); //button

  function runAlg(param) {
    targetPhrase = param;
    //////Sets the population size
    if (targetPhrase.length < 10) {
      populationSize = 250;
    } else {
      if (targetPhrase.length < 15) {
        populationSize = 550;
      } else {
        if (targetPhrase.length < 25) {
          populationSize = 1000;
        } else {
          if (targetPhrase.length < 35) {
            populationSize = 2500;
          } else {
            populationSize = 5000;
          }
        }
      }
    }

    let member = []; //array of members of the initial population

    for (let i = 0; i < populationSize; i++) {
      member = CreateMember(targetPhrase.length);
      population.push(member);
    }

    fitnessArray = CreateFitnessArray(population, targetPhrase);

    matingPoolBucket = CreateMatingPool(population, fitnessArray);

    let best = Scan(fitnessArray);

    let bestPhrase = [];
    let bestPhraseString = "";

    //first and second are randomly selected members in the matingpool bucket.  They will create a child in the next generation
    let first = 0;
    let second = 0;
    //evolves current population based on fittest members
    while (best[0] !== 1) {
      bestPhrase = population[best[1]];
      bestPhraseString = bestPhrase.join("");
      phrasesArr.push(bestPhraseString);
      population = [];

      for (let i = 0; i < populationSize; i++) {
        first = Math.floor(Math.random() * matingPoolBucket.length);
        second = Math.floor(Math.random() * matingPoolBucket.length);
        population.push(CreateChild(matingPoolBucket, first, second));
      }

      fitnessArray = CreateFitnessArray(population, targetPhrase);
      matingPoolBucket = CreateMatingPool(population, fitnessArray);
      best = Scan(fitnessArray);
    }

    bestPhrase = population[best[1]];
    bestPhraseString = bestPhrase.join("");
    phrasesArr.push(bestPhraseString);

    let time = 0;
    ////used to determine how fast the best phrases evolve in the user's window
    if (phrasesArr.length < 100) {
      time = 200;
    } else {
      if (phrasesArr.length < 500) {
        time = 100;
      } else {
        if (phrasesArr.length < 1000) {
          time = 25;
        } else {
          if (phrasesArr.length < 5000) {
            time = 10;
          } else {
            if (phrasesArr.length < 25000) {
              time = 5;
            } else {
              time = 1;
            }
          }
        }
      }
    }

    ////This obj is needed to stop the set inverval once the target phrase is reached using clearInterval
    let obj = setInterval(() => {
      setCurrentBest(phrasesArr[index]);
      setGenerationNum(index);

      if (phrasesArr[index] === targetPhrase) {
        setFinished("Finished! Refresh the page to try again.");
        clearInterval(obj);
      }
      index++;
    }, time);

    intervalRef.current = obj;
  }
  let intervalRef = useRef();
  useEffect(() => {
    console.log("Genetic Algorithm MOUNTED");
    return () => {
      clearInterval(intervalRef.current);
      window.location.reload();
    };
  }, []);

  return (
    <div style={{ textAlign: "center", color: "NavajoWhite" }}>
      <h1>Genetic Algorithm </h1>

      <p style={{ fontSize: "1.2rem" }}>
        Enter a short phrase.
        <br></br>
        <input
          onChange={(e) => {
            setInputBox(e.target.value);
            e.preventDefault();
          }}
          name="Hola"
          type="text"
          value={inputBox}
          style={{ visibility: `${visibility}` }}
        />
      </p>
      <div className="btn">
        <button
          className="btn"
          onClick={() => {
            setFinished("Working on it.....");
            runAlg(inputBox);
            setVisibility("hidden");
            setDisplay("none");
          }}
          style={{ display: `${display}` }}
        >
          Submit{" "}
        </button>

        <button
          className="btn"
          onClick={() => {
            window.location.reload();
          }}
        >
          Refresh{" "}
        </button>
      </div>
      <p style={{ textAlign: "center", color: "#ffffff", fontSize: "1.7rem" }}>
        {" "}
        {finished}
      </p>

      <br />
      <br />
      <br />

      <h2>
        Your phrase is:{" "}
        <p style={{ textAlign: "center", color: "#00bfff" }}> {targetPhrase}</p>
      </h2>

      <br />
      <br />
      <br />

      <Display best={currentBest} genNum={generationNum} />

      {phrasesArr.map((ele, index) => {
        return (
          <p
            key={index}
            style={{
              textAlign: "left",
              color: "NavajoWhite",
              fontSize: "1.2rem",
            }}
          >
            {" "}
            Fittest member from generation #{index + 1}:{" "}
            <span style={{ color: "#00ff80", fontSize: "1.2rem" }}>
              {" "}
              {ele}{" "}
            </span>{" "}
          </p>
        );
      })}
    </div>
  );
}

export default GeneticAlgorithm;

//////////////////////////////DISPLAY/////////////////////////////////////////////

function Display(props) {
  return (
    <div>
      <h2>
        {" "}
        Phrase Evolving:{" "}
        <p style={{ textAlign: "center", color: "#00ff80" }}>
          {props.best}{" "}
        </p>{" "}
      </h2>

      <h2>
        {" "}
        Number of Generations:{" "}
        <p style={{ textAlign: "center", color: "#00ff80" }}>
          {props.genNum + 1}{" "}
        </p>{" "}
      </h2>
    </div>
  );
}

///////////////////////////CreateChild//////////////////////

function CreateChild(matingBucket, first, second) {
  let f = matingBucket[first];
  let s = matingBucket[second];

  if (f === s) {
    Mutate(f);
    Mutate(s);
  }

  let child = [];

  let midpoint = Math.floor(Math.random() * f.length);

  for (let i = 0; i < f.length; i++) {
    if (i < midpoint) {
      child.push(f[i]);
    } else {
      child.push(s[i]);
    }
  }

  let m = Math.random();
  let mutationRate = 0.01;

  if (m < mutationRate) {
    return Mutate(child);
  } else {
    return child;
  }
}

/////////////////////////////CalculateFitness////////////////////////////

function CalculateFitness(arr, targetPhraseArr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === targetPhraseArr[i]) {
      sum++;
    }
  }
  return sum / arr.length;
}

function CreateFitnessArray(populationArray, targetPhrase) {
  let stringArr = targetPhrase.split("");

  let FitnessArray = [];
  let score = 0;
  let check = [];

  for (let i = 0; i < populationArray.length; i++) {
    check = populationArray[i];
    score = CalculateFitness(check, stringArr);
    FitnessArray.push(score);
  }

  return FitnessArray;
}

////////////////////////////CreateMatingPool////////////////////

function CreateMatingPool(popArr, fitArr) {
  let bucket = [];

  let instances = 0;

  for (let i = 0; i < popArr.length; i++) {
    instances = Math.floor(fitArr[i] * 100);
    for (let k = 0; k < instances; k++) {
      bucket.push(popArr[i]);
    }
  }

  return bucket;
}

////////////////////////CreateMember////////////////////

function newChar() {
  let min = 32;
  let max = 122;
  let rand = Math.random() * (max - min) + min;
  let c = Math.floor(rand);

  return String.fromCharCode(c);
}

function CreateMember(targetSize) {
  let sizeOfMember = targetSize;
  let member = [];
  let charElement = "";

  for (let i = 0; i < sizeOfMember; i++) {
    charElement = newChar();
    member.push(charElement);
  }

  return member;
}

///////////////////////Mutate////////////////////

function Mutate(child) {
  let rand = Math.floor(Math.random() * child.length);

  let newChild = child;
  newChild[rand] = newChar();
  return newChar;
}

/////////////////////Scan/////////////////////

function Scan(fitArr) {
  let max = 0;
  let index = 0;

  for (let i = 0; i < fitArr.length; i++) {
    if (fitArr[i] >= max) {
      max = fitArr[i];
      index = i;
    }
  }

  return [max, index];
}
