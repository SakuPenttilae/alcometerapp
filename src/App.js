//Saku Penttilä OAMK TIK21SP
import { useState } from 'react/cjs/react.development';
import './App.css';

function App() {
  const [pullo, setPullo] = useState(0);
  const [paino, setPaino] = useState(0);
  const [tunnit, setTunnit] = useState(0);
  const [tulos, setTulos] = useState(0);
  const litrat = pullo * 0.33
  const promille = litrat * 8 * 4.5
  const kulutus = paino/10
  const promilletJäljellä = promille - (kulutus*tunnit) 
  let mies = document.getElementById("mies")
  let nainen = document.getElementById("nainen")
  
  function kumpiSukupuoli() {
    if (mies.checked==true) {
      return 0.7
    } else if (nainen.checked==true) {
      return 0.6
    }
  }

  const calculate = (e) => {
    e.preventDefault();
    let sukupuoli = kumpiSukupuoli()
    setTulos(promilletJäljellä / (paino * sukupuoli))

    if (pullo<=0) {
      setTulos(0)
    }
    if (promilletJäljellä<=0) {
      setTulos(0)
    }

  }

  return (
    <div>
      <h3>Alcometer</h3>
      <form onSubmit={calculate}>
        <div>
          <label>Paino</label>
          <input 
          type="number" 
          step="1"
          value={paino}
          onChange={e => setPaino(e.target.value)}
          />
        </div>
        <div>
        <label>Oluet</label>
          <input 
          type="number" 
          step="1"
          value={pullo}
          onChange={e => setPullo(e.target.value)}
          />
        </div>
        <div>
        <label>Tunnit</label>
          <input 
          type="number" 
          step="1"
          value={tunnit}
          onChange={e => setTunnit(e.target.value)}
          />
        </div>
        <div>
          <label>Sukupuoli </label>
          <label>Mies<input name="sukupuoli" type="radio" id="mies"/></label>
          <label>Nainen<input name="sukupuoli" type="radio" id="nainen"/></label>
        </div>
        <div>
          <output>{tulos.toFixed(2)} promillea veressä</output>
        </div>
        <button>Laske</button>
      </form>
    </div>
  );
}

export default App;
