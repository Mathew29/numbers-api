import React, { useState } from "react";
import RandomYearFact from "../RandomYearFact/index";
import RandomMathFact from "../RandomMathFact/index";
import RandomTriviaFact from "../RandomTriviaFact/index";
import "./Splash.css";

export default function Splash() {
  const [userNumber, setUserNumber] = useState();

  //move function to its own component

  return (
    <div className="container">
      <h1 className="title">Welcome to the Ramdom Fact Generator</h1>
      <div className="form-container">
        <form className="form">
          <input
            type="number"
            placeholder="Enter Number Here..."
            onChange={(e) => setUserNumber(e.target.value)}
          ></input>
        </form>
      </div>
      <div className="fact-container facts">
        <RandomYearFact userNumber={userNumber} />
        <RandomMathFact userNumber={userNumber} />
        <RandomTriviaFact userNumber={userNumber} />
      </div>
      {/* <button onClick={() => console.log(userNumber)}>Im a Button</button> */}
    </div>
  );
}
