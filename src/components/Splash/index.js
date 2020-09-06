import React, { useState } from "react";

export default function Splash() {
  const [randomFact, setRandomFact] = useState([]);
  const [showFacts, setShowFacts] = useState(false);

  //move function to its own component
  async function fetchFacts() {
    await fetch(
      "https://numbersapi.p.rapidapi.com/6/21/date?fragment=true&json=true",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "numbersapi.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_API_KEY,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        for (let item in data) {
          console.log("item", data[item]);
          setRandomFact((oldArray) => [...oldArray, data[item]]);
        }
        setShowFacts(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div>
    <div>
      <form>
        <input type='text'></input>
      </form>
    </div>
      <h1>Hello</h1>
      <button onClick={() => fetchFacts()}>Im a Button</button>
      {showFacts === true ? <p>Random Fact: {randomFact[0]}</p> : <p></p>}
      
    </div>
  );
}
