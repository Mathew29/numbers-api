import React, { useState } from "react";
import RandomYearFact from "../RandomYearFact/index";
import RandomMathFact from "../RandomMathFact/index";
import RandomTriviaFact from "../RandomTriviaFact/index";
import "./Splash.css";

export default function Splash() {
  const [userNumber, setUserNumber] = useState();
  const [fact, setFact] = useState([]);
  const [showFacts, setShowFacts] = useState(false);

  //move function to its own component

  return (
    <div className="container">
      <h1 className="title">Welcome to the Random Fact Generator</h1>
      <div className="border">
        <div className="form-container">
          <form className="form">
            <input
              type="number"
              placeholder="Enter Number Here..."
              onChange={(e) => setUserNumber(e.target.value)}
            ></input>
          </form>
        </div>
        {showFacts === true ? <p>Random Fact: {fact[0]}</p> : <p></p>}
        <div className="fact-container facts">
          <RandomYearFact userNumber={userNumber} setFact={setFact} setShowFacts={setShowFacts} showFacts={showFacts} fact={fact} />
          <RandomMathFact userNumber={userNumber} setFact={setFact} setShowFacts={setShowFacts} showFacts={showFacts} fact={fact} />
          <RandomTriviaFact userNumber={userNumber} setFact={setFact} setShowFacts={setShowFacts} showFacts={showFacts} fact={fact} />
        </div>
      </div>
    </div>
  );
}
