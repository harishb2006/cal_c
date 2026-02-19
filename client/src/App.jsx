import { useState } from 'react'
import './App.css'

function App() {
  const [display, setDisplay] = useState('0')
  const [firstNum, setFirstNum] = useState(null)
  const [operator, setOperator] = useState(null)
  const [waitingForSecond, setWaitingForSecond] = useState(false)

  const handleNumber = (num) => {
    if (waitingForSecond) {
      setDisplay(num)
      setWaitingForSecond(false)
    } else {
      setDisplay(display === '0' ? num : display + num)
    }
  }

  const handleDecimal = () => {
    if (waitingForSecond) {
      setDisplay('0.')
      setWaitingForSecond(false)
      return
    }
    if (!display.includes('.')) {
      setDisplay(display + '.')
    }
  }

  const handleOperator = (op) => {
    setFirstNum(parseFloat(display))
    setOperator(op)
    setWaitingForSecond(true)
  }

  const calculate = () => {
    const second = parseFloat(display)
    let result = 0
    switch (operator) {
      case '+': result = firstNum + second; break
      case '-': result = firstNum - second; break
      case '*': result = firstNum * second; break
      case '/': result = firstNum / second; break
      default: return
    }
    
    // Round to prevent weird floating point issues (e.g., 0.1 + 0.2 = 0.30000000000000004)
    result = Math.round(result * 100000000) / 100000000
    
    setDisplay(String(result))
    setOperator(null)
    setFirstNum(null)
  }

  const clear = () => {
    setDisplay('0')
    setFirstNum(null)
    setOperator(null)
    setWaitingForSecond(false)
  }

  return (
    <div className="calculator-container">
      <div className="calculator-display">
        {display}
      </div>
      
      <div className="calculator-keypad">
        <button className="btn-action btn-clear" onClick={clear}>C</button>
        <button className="btn-action" onClick={() => handleOperator('/')}>÷</button>
        
        <button className="btn-num" onClick={() => handleNumber('7')}>7</button>
        <button className="btn-num" onClick={() => handleNumber('8')}>8</button>
        <button className="btn-num" onClick={() => handleNumber('9')}>9</button>
        <button className="btn-op" onClick={() => handleOperator('*')}>×</button>
        
        <button className="btn-num" onClick={() => handleNumber('4')}>4</button>
        <button className="btn-num" onClick={() => handleNumber('5')}>5</button>
        <button className="btn-num" onClick={() => handleNumber('6')}>6</button>
        <button className="btn-op" onClick={() => handleOperator('-')}>-</button>
        
        <button className="btn-num" onClick={() => handleNumber('1')}>1</button>
        <button className="btn-num" onClick={() => handleNumber('2')}>2</button>
        <button className="btn-num" onClick={() => handleNumber('3')}>3</button>
        <button className="btn-op" onClick={() => handleOperator('+')}>+</button>
        
        <button className="btn-num btn-zero" onClick={() => handleNumber('0')}>0</button>
        <button className="btn-num" onClick={handleDecimal}>.</button>
        <button className="btn-equals" onClick={calculate}>=</button>
      </div>
    </div>
  )
}

export default App