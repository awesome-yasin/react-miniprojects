import React, { useState } from "react";
import "./calculator.css";

const Calculator = () => {
  let [number, setNumber] = useState("");

  function handleClick(e) {
    setNumber(number + e);
    console.log(number);
  }

  function handleCalc() {
    setNumber(eval(number));
  }
  return (
    <div className = "calculator-body">
      <div className="calculator">
        <div className="input" id="input">
          {" "}
          {number}{" "}
        </div>

        <div className="buttons">
          <div class="operators">
            <button onClick={() => handleClick("+")}>+</button>

            <button onClick={() => handleClick("-")}>-</button>
            <button onClick={() => handleClick("*")}>&times;</button>
            <button onClick={() => handleClick("/")}>&divide;</button>
            <button onClick={() => setNumber("")}>AC</button>
          </div>
          <div className="leftPanel">
            <div className="numbers">
              <div onClick={() => handleClick(7)}>7</div>
              <div onClick={() => handleClick(8)}>8</div>
              <div onClick={() => handleClick(9)}>9</div>
            </div>
            <div className="numbers">
              <div onClick={() => handleClick(4)}>4</div>
              <div onClick={() => handleClick(5)}>5</div>
              <div onClick={() => handleClick(6)}>6</div>
            </div>
            <div className="numbers">
              <div onClick={() => handleClick(1)}> 1</div>
              <div onClick={() => handleClick(2)}>2</div>
              <div onClick={() => handleClick(3)}>3</div>
            </div>
            <div className="numbers">
              <div onClick={() => handleClick(0)}>0</div>
              <div onClick={() => handleClick(".")}>.</div>
              <div id="clear" onClick={() => setNumber("")}>
                C
              </div>
            </div>
          </div>
          <div class="equal" id="result" onClick={handleCalc}>
            =
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}

export default Calculator;