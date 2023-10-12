import { useState } from "react";
import Number from "./Number";
import Operation from "./Operation";
import Screen from "./Screen";

const Calculator = () => {

  // Tracking allowable operators so we can distinguish actions from arithmetic operators
  const operators = ['+', '-', '/', '*'];

  // Track calculator state:  using empty strings instead of null since we're contcatenating later
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operator, setOperator] = useState('');
  const [display, setDisplay] = useState('');

  // Number button clicks
  const handleNumberClick = (button) => {
    // Don't process number buttons unti the previous result is cleared, if present
    if (operator !== "=") {
      // If there's a valid arithmetic operator, we're entering num2, otherwise we're entering num1
      if (operators.includes(operator)) {
        setNum2(num2 + button);
        setDisplay(num2 + button);
      } else {
        setNum1(num1 + button);
        setDisplay(num1 + button);
      }
    }

  };

  // Operator button clicks:  if it's an arthemtic operator, add it to state.  If it's an action button, process it
  const handleOperationClick = (button) => {

    // If we're multiplying, convert button label 'x' to operator '*'
    button = (button === 'x' ? '*' : button);
    // If this is one of the arithmetic operators add it to state.  If it's an action button, process it.
    if (operators.includes(button) && num1) {                   // Ignore operator buttons if num1 hasn't been entered
      setOperator(button);
    } else if (button === 'clear') {
      setNum1('');
      setNum2('');
      setOperator('');
      setDisplay('');
    } else if (button === '=' && num1 && operator && num2) {    // Only calculate if both nums and operator have been entered
      // eslint-disable-next-line no-eval
      const newVal = eval(parseInt(num1) + operator + parseInt(num2));
      setDisplay(newVal);
      setOperator(button);
      // Prepare for the next operation
      setNum1('');
      setNum2('');
    }

  };


  return (
    <div className="calculator">
      <Screen value={display} />
      <div style={{ display: "flex" }}>
        <div className="keypad">
          <Number value={1} onClick={() => { return handleNumberClick(1); }} />
          <Number value={2} onClick={() => { return handleNumberClick(2); }} />
          <Number value={3} onClick={() => { return handleNumberClick(3); }} />
          <Number value={4} onClick={() => { return handleNumberClick(4); }} />
          <Number value={5} onClick={() => { return handleNumberClick(5); }} />
          <Number value={6} onClick={() => { return handleNumberClick(6); }} />
          <Number value={7} onClick={() => { return handleNumberClick(7); }} />
          <Number value={8} onClick={() => { return handleNumberClick(8); }} />
          <Number value={9} onClick={() => { return handleNumberClick(9); }} />
          <Number value={0} onClick={() => { return handleNumberClick(0); }} />
          <Operation value="=" classes="action-key" operator={operator} onClick={() => { return handleOperationClick("="); }} />
          <Operation value="clear" classes="action-key" operator={operator} onClick={() => { return handleOperationClick("clear"); }} />
        </div>
        <div style={{ paddingLeft: 10 }}>
          <Operation value="+" classes="operator-key" operator={operator} onClick={() => { return handleOperationClick("+"); }} />
          <Operation value="/" classes="operator-key" operator={operator} onClick={() => { return handleOperationClick("/"); }} />
          <Operation value="x" classes="operator-key" operator={operator} onClick={() => { return handleOperationClick("x"); }} />
          <Operation value="-" classes="operator-key" operator={operator} onClick={() => { return handleOperationClick("-"); }} />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
