import React, { useState } from "react";
import RandomYearFact from "../RandomYearFact/index";
import RandomMathFact from "../RandomMathFact/index";
import RandomTriviaFact from "../RandomTriviaFact/index";

export default function Splash() {
  const [userNumber, setUserNumber] = useState();

  //move function to its own component

  return (
    <div>
      <h1>Welcome to the Ramdom Fact Generator</h1>
      <div>
        <form>
          <input
            type="number"
            placeholder='Enter Number Here...'
            onChange={(e) => setUserNumber(e.target.value)}
          ></input>
        </form>
      </div>
      <RandomYearFact userNumber={userNumber} />
      <RandomMathFact userNumber={userNumber} />
      <RandomTriviaFact userNumber={userNumber} />
      {/* <button onClick={() => console.log(userNumber)}>Im a Button</button> */}
    </div>
  );
}
