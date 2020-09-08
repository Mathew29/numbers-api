import React, { useState } from "react";
import RandomYearFact from "../RandomYearFact/index";
// import RandomDateFact from '../RandomDateFact/index';

export default function Splash() {
  const [userNumber, setUserNumber] = useState();
  const [fact, setFact] = useState([])
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
      <RandomYearFact userNumber={userNumber} setShowFacts={() => setShowFacts()} setFact={() => setFact()} />
      {/* <button onClick={() => console.log(userNumber)}>Im a Button</button> */}
      {showFacts === true ? <p>Random Fact: {fact[0]}</p> : <p></p>}
      
    </div>
  );
}
