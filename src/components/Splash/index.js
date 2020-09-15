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
  let showingFacts = null;
  if (showFacts === true) {
    showingFacts = <p className="fact">{fact[0]}</p>;
  }

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
          <div className="showingFacts">{showingFacts}</div>
          {/* {showFacts === true ? <p className="fact">{fact[0]}</p> : null} */}
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
