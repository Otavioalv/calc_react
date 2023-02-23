import './App.css';
import Botao from './components/botoes/botao';

function App() {
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className='calc' >
      <div className='calc_body'>
        {numeros.map((numero) => (
          <Botao key={numero} val={numero} />
        ))} 
      </div>
    </div>
  );
}

export default App;
