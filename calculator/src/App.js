import './App.css';
import Botao from './components/botoes/botao';
import Tela from './components/tela/Tela';

function App() {
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9,'.', 0, 'c'];
  const operators = ['+', '-', 'X', '=']

 

  return (
    <div className='calc'>
      <div>
        <Tela></Tela>
      </div>
      <div className='calc_body'>
        <div className='number_bottom'>
          {
            numeros.map((numero) => (
              <Botao 
                key={numero}
                val={numero} 
                color="#363a3d"
                />
            ))
          } 
        </div>

        <div className='operator_bottom'>
          {
            operators.map((operator) => (
              <Botao 
                key={operator}
                val={operator}
                color="#4f3767"
                />
            ))
          }
        </div>

        <div className='equal_bottom'>
          <Botao
            val='='
            color='#4f3767'
          />
        </div>
        <input type='color' display='none'></input>
      </div>
    </div>
  );
}

export default App;
