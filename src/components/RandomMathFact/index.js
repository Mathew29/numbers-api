import React from "react";
import "./RandomMathFact.css";

export default function RandomMathFact(props) {
  async function fetchFacts() {
    if (props.showFacts) props.setShowFacts(false);
    if(props.fact !== []) props.setFact([])
    await fetch(
      `https://numbersapi.p.rapidapi.com/${props.userNumber}/math?fragment=true&json=true`,
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
          props.setFact((oldArray) => [...oldArray, data[item]]);
        }
        // send through props
        props.setShowFacts(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className="btn-container">
      <button className='btn-math' onClick={() => fetchFacts()}>Math Fact</button>
    </div>
  );
}
