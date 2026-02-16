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
    <div className="ugly-container">
      <h1 className="ugly-title">💀 CALCULATER 💀</h1>
      <marquee className="ugly-marquee">~~~ BEST CALCULATOR EVER ~~~ CLICK BUTTONS TO DO MATH ~~~</marquee>
      
      <div className="ugly-display">{display}</div>
      
      <div className="ugly-buttons">
        <button className="btn-num btn-1" onClick={() => handleNumber('7')}>7</button>
        <button className="btn-num btn-2" onClick={() => handleNumber('8')}>8</button>
        <button className="btn-num btn-3" onClick={() => handleNumber('9')}>9</button>
        <button className="btn-op" onClick={() => handleOperator('/')}>÷</button>
        
        <button className="btn-num btn-4" onClick={() => handleNumber('4')}>4</button>
        <button className="btn-num btn-5" onClick={() => handleNumber('5')}>5</button>
        <button className="btn-num btn-6" onClick={() => handleNumber('6')}>6</button>
        <button className="btn-op" onClick={() => handleOperator('*')}>×</button>
        
        <button className="btn-num btn-7" onClick={() => handleNumber('1')}>1</button>
        <button className="btn-num btn-8" onClick={() => handleNumber('2')}>2</button>
        <button className="btn-num btn-9" onClick={() => handleNumber('3')}>3</button>
        <button className="btn-op" onClick={() => handleOperator('-')}>-</button>
        
        <button className="btn-clear" onClick={clear}>C</button>
        <button className="btn-num btn-0" onClick={() => handleNumber('0')}>0</button>
        <button className="btn-equals" onClick={calculate}>=</button>
        <button className="btn-op" onClick={() => handleOperator('+')}>+</button>
      </div>
      
      <p className="ugly-footer">© 1999 made with MS Paint</p>
      <blink className="ugly-blink">⚠️ UNDER CONSTRUCTION ⚠️</blink>
    </div>
  )
}

export default App
