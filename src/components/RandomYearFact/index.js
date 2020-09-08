import React, { useState } from "react";

export default function RandomYearFact(props) {
  const [yearFact, setYearFact] = useState([]);
  const [showFacts, setShowFacts] = useState(false);

  async function fetchFacts() {
    await fetch(
      `https://numbersapi.p.rapidapi.com/${props.userNumber}/year?fragment=true&json=true`,
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
          setYearFact((oldArray) => [...oldArray, data[item]]);
        }
        // send through props
        setShowFacts(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div>
      <button onClick={() => fetchFacts()}>Year Fact</button>
      {showFacts === true ? <p>Random Fact: {yearFact[0]}</p> : <p></p>}
    </div>
  );
}
