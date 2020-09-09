import React, {useState} from 'react'

export default function RandomTriviaFact(props) {
    const [triviaFact, setTriviaFact] = useState([]);
    const [showFacts, setShowFacts] = useState(false);

    async function fetchFacts() {
        await fetch(
          `https://numbersapi.p.rapidapi.com/${props.userNumber}/trivia?fragment=true&notfound=floor&json=true`,
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
              setTriviaFact((oldArray) => [...oldArray, data[item]]);
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
          <button onClick={() => fetchFacts()}>Trivia Fact</button>
          {showFacts === true ? <p>Random Fact: {triviaFact[0]}</p> : <p></p>}
        </div>
      );
}