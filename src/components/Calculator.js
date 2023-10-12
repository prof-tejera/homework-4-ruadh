import { useState } from "react";
import Number from "./Number";
import Operation from "./Operation";
import Screen from "./Screen";


const Calculator = () => {

  // In a prod situation, I'd pass these to the calculator as props so we could support more functionality (decimals, other operators, etc.)
  const digits = '1234567890'.split('');
  const operators = ['+', '-', '/', '*'];
  const actions = ['=', 'clear'];

  // Track calculator state:  using empty strings instead of null since we're contcatenating later
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operator, setOperator] = useState('');
  const [display, setDisplay] = useState('');

  // Number button clicks
  const handleNumberClick = (button) => {
    // If there's a valid arithmetic operator, we're entering num2, otherwise we're entering num1
    if (operators.includes(operator)) {
      setNum2(num2 + button);
      setDisplay(num2 + button);
    } else {
      setNum1(num1 + button);
      setDisplay(num1 + button);
    }

  };

  // Operator button clicks:  if it's an arthemtic operator, add it to state.  If it's an action button, process it.
  const handleOperationClick = (button) => {
    if (operators.includes(button) && num1) {                                    // Don't accept the operator if num1 hasn't been entered yet
      setOperator(button);
    } else if (button === 'clear') {
      setNum1('');
      setNum2('');
      setOperator('');
      setDisplay('');
    } else if (button === '=' && num1 && operator && num2) {                     // Don't calculate until both nums and operator have been entered
      // eslint-disable-next-line no-eval
      const newVal = eval(num1 + (operator === 'x' ? '*' : operator) + num2);    // Substitute key label x for operator *
      setDisplay(newVal);
      setOperator(button);
      setNum1(newVal);                                                           // Prepare for the next operation:  num1 receives the result
      setNum2('');
    }

  };

  // Creating keys via iteration is less readable, but I didn't get to it in the last homework, and wanted to practice it 
  return (
    <div className="calculator">
      <Screen value={display} />
      <div style={{ display: "flex" }}>
        <div className="keypad">
          {digits.map(key => (
            <Number value={key} onClick={() => { return handleNumberClick(parseFloat(key)); }} />   // Input is an integer, but coercing it into a float here saves us steps elsewhere
          ))}
          {actions.map(key => (
            <Operation value={key} classes="action-key" operator={operator} onClick={() => { return handleOperationClick(key); }} />
          ))}
        </div>
        <div style={{ paddingLeft: 10 }}>
          {operators.map(key => (
            <Operation value={key} classes="operator-key" operator={operator} onClick={() => { return handleOperationClick(key); }} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
