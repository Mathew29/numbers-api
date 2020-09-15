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
        <div className="position">
          <input
            type="number"
            placeholder="Enter Number Here..."
            onChange={(e) => setUserNumber(e.target.value)}
          ></input>

          {showFacts === true ? (
            <p className="fact">{fact[0]}</p>
          ) : <p className="fact"></p>}
          <div className="fact-container">
            <div className="facts">
              <RandomYearFact
                userNumber={userNumber}
                setFact={setFact}
                setShowFacts={setShowFacts}
                showFacts={showFacts}
                fact={fact}
              />
              <RandomMathFact
                userNumber={userNumber}
                setFact={setFact}
                setShowFacts={setShowFacts}
                showFacts={showFacts}
                fact={fact}
              />
              <RandomTriviaFact
                userNumber={userNumber}
                setFact={setFact}
                setShowFacts={setShowFacts}
                showFacts={showFacts}
                fact={fact}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
