import React, { useState, useEffect } from "react";

export default function Splash() {
  const { randomFact, setRandomFact } = useState();
  async function fetchFacts() {
    await fetch(
      "https://numbersapi.p.rapidapi.com/6/21/date?fragment=true&json=true",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "numbersapi.p.rapidapi.com",
          "x-rapidapi-key":
            process.env.REACT_APP_API_KEY,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div>
      <h1>Hello</h1>
      <button onClick={() => fetchFacts()}>Im a Button</button>
    </div>
  );
}
