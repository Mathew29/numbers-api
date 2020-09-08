import React, {useState} from 'react'
6
export default function RandomDateFact() {
    const [randomDateFact, setRandomDateFact] = useState()

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
              setRandomDateFact((oldArray) => [...oldArray, data[item]]);
            }
            // send through props
            // setShowFacts(true);
          })
          .catch((err) => {
            console.log(err);
          });
      }
} 