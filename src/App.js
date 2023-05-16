import "./App.css"
import { useState } from "react";

function App() {

  const [pare, setPare] = useState(0)
  const [valuta, setValuta] = useState("BAM")
  const [promjena, setPromjena] = useState("BAM")
  const [convert, setConvert] = useState()

  const handlePare = (event) => {
    setPare(event.target.value)
  }

  const handleValuta = (event) => {
    setValuta(event.target.value)
  }

  const handlePromjena = (event) => {
    setPromjena(event.target.value)
  }

  const getKurs = () => {
    switch(valuta) {
      case "BAM":
        switch(promjena) {
          case "BAM": 
            return 1
          case "USD":
            return 0.56
          case "EUR":
            return 0.51
          case "GBP": 
            return 0.45
        }
      case "USD": 
        switch(promjena) {
          case "BAM":
            return 1.8
          case "USD":
            return 1
          case "EUR":
            return 0.92
          case "GBP":
            return 0.8
        }
      case "EUR": 
        switch(promjena) {
          case "BAM":
            return 1.96
          case "USD":
            return 1.09
          case "EUR":
            return 1
          case "GBP":
            return 0.87 
        }
      case "GBP": 
        switch(promjena) {
          case "BAM":
            return 2.25
          case "USD":
            return 1.25
          case "EUR":
            return 1.15
          case "GBP":
            return 1
        }
    }
  }

  const changeToDiffCurrency = () => {
    const kurs = getKurs()
    if(pare > 0) {
      return pare * kurs + ` ${promjena}`
    }
  }

  const handleConversion = (event) => {
    event.preventDefault()
    setConvert(changeToDiffCurrency())
  }

  const zamijeniMjesta = () => {
    setValuta(promjena)
    setPromjena(valuta)
  }

  return (
    <div className="App">
      <div className="formcont"><form onSubmit={handleConversion}>
        <select value={valuta} onChange={handleValuta}>
          <option value="BAM">BAM</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
        </select>
        <input type="number" placeholder="Novac" onChange={handlePare}></input>
        <button type="submit">Convert</button>
      </form>
      <select value={promjena} onChange={handlePromjena}>
          <option value="BAM">BAM</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
        </select>
      <button onClick={zamijeniMjesta}>Zamijeni </button>
      <div className="resultDiv">
        <p>{convert}</p>
      </div>
      </div>
    </div>
  );
}

export default App;
