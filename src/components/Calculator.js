import { useState } from "react";
import Number from "./Number";
import Operation from "./Operation";
import Screen from "./Screen";

const Calculator = () => {

  // Tracking allowable operators  (since we're using evaluate, it seems wise to limit this by code, not by UI)
  const operators = ['+', '-', '/', 'x'];

  // Track calculator state
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operator, setOperator] = useState('');
  const [display, setDisplay] = useState('');

 // Number button clicks
  const handleNumberClick = (e) => {
    // TO DO:  get this a better way - maybe with children?
    const button = e.target.innerHTML;
    // If there's a valid arithmetic operator, we're entering num2, otherwise we're entering num1
    if (operators.includes(operator)) {
      // TO DO:  refactor
      setNum2( num2 + button);
      setDisplay(num2 + button);
    } else {
      // TO DO:  refactor
      setNum1(num1 + button);
      setDisplay(num1 + button);
    }

  };

 // Operator button clicks
  const handleOperationClick = (e) => {
    // TO DO:  get this in a better way
    const button = e.target.innerHTML;
    // If this is one of the arithmetic operators, add it to state.  If it's an action, process it.
    if (operators.includes(button)) {
      setOperator(button);
    } else if (button==='clear'){
      setNum1('');
      setNum2('');
      setOperator('');
      setDisplay('');
    } else if (button==='='){
      // eslint-disable-next-line no-eval
      setDisplay(eval(num1 + operator + num2));
    }

  };

  return (
    <div>
      <div>
        <div><strong>Num1: </strong>{num1}</div>
        <div><strong>Operator: </strong>{operator}</div>
        <div><strong>Num2: </strong>{num2}</div>
        <div><strong>Display: </strong>{display}</div>
      </div>
      <Screen value={display} />
      <div style={{ display: "flex" }}>
        <div>
          <Number value={0} onClick={handleNumberClick} />
          <Number value={1} onClick={handleNumberClick} />
          <Number value={2} onClick={handleNumberClick} />
          <Number value={3} onClick={handleNumberClick} />
          <Number value={4} onClick={handleNumberClick} />
          <Number value={5} onClick={handleNumberClick} />
          <Number value={6} onClick={handleNumberClick} />
          <Number value={7} onClick={handleNumberClick} />
          <Number value={8} onClick={handleNumberClick} />
          <Number value={9} onClick={handleNumberClick} />
        </div>
        <div style={{ paddingLeft: 10 }}>
          <Operation value="+" onClick={handleOperationClick} />
          <Operation value="/" onClick={handleOperationClick} />
          <Operation value="x" onClick={handleOperationClick} />
          <Operation value="-" onClick={handleOperationClick} />
          <Operation value="=" onClick={handleOperationClick} />
          <Operation value="clear" onClick={handleOperationClick} />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
