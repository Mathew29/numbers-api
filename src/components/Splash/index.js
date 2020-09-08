import React, { useState } from "react";
import RandomYearFact from "../RandomYearFact/index";
import RandomMathFact from '../RandomMathFact/index';

export default function Splash() {
  const [userNumber, setUserNumber] = useState();
  



  //move function to its own component
  
  return (  
    <div>
    <div>
      <form>
        <input type='text' onChange={e => setUserNumber(e.target.value)}></input>
      </form>
    </div>
      <h1>Hello</h1>
      <RandomYearFact userNumber={userNumber} />
      <RandomMathFact userNumber={userNumber} />
      {/* <button onClick={() => console.log(userNumber)}>Im a Button</button> */}
      
    </div>
  );
}
