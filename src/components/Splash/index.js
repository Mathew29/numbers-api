import React, { useState } from "react";
import RandomDateFact from '../RandomDateFact/index';

export default function Splash() {
  // const [randomFact, setRandomFact] = useState([]);
  const [showFacts, setShowFacts] = useState(false);

  //move function to its own component
  
  return (
    <div>
    <div>
      <form>
        <input type='text'></input>
      </form>
    </div>
      <h1>Hello</h1>
      <button onClick={() => fetchFacts()}>Im a Button</button>
      {showFacts === true ? <p>Random Fact: {randomFact[0]}</p> : <p></p>}
      
    </div>
  );
}
