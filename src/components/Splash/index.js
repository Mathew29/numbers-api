import React, { useState } from "react";
import RandomDateFact from "../RandomDateFact";
// import RandomDateFact from '../RandomDateFact/index';

export default function Splash() {
  const [userNumber, setUserNumber] = useState([]);
  const [showFacts, setShowFacts] = useState(false);

  //move function to its own component
  
  return (
    <div>
    <div>
      <form>
        <input type='text' onChange={e => setUserNumber(e.target.value)}></input>
      </form>
    </div>
      <h1>Hello</h1>
      <RandomDateFact userNumber={userNumber} setShowFacts={setShowFacts()} />
      <button onClick={() => console.log(userNumber)}>Im a Button</button>
      {/* {showFacts === true ? <p>Random Fact: {randomFact[0]}</p> : <p></p>} */}
      
    </div>
  );
}
